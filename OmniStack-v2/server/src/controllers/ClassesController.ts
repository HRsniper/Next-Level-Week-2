// sempre que nao estiver routes.post('/', function); importa a tipagem com letra maiúscula
import { Request, Response } from "express";

import { db } from "../database/connection";
import { convertHourToMinutes } from "../utilities/convertHourToMinutes";
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: "sem entrada no filtro de procura",
            });
        }

        const timeInMinutes = convertHourToMinutes(time);
        // console.log(timeInMinutes);

        try {
            const classes = await db("classes")
                .whereExists(function () {
                    this.select("class_schedule.*")
                        .from("class_schedule")
                        .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
                        // parametro '??' , [var]
                        // .whereRaw('`class_schedule`.`week_day` = ??', [week_day])
                        .where("class_schedule.week_day", "=", week_day)
                        .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
                        .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
                })

                .where("classes.subject", "=", subject)
                // user_id(classes) seja = id(users)
                .join("users", "classes.user_id", "=", "users.id")
                // selecionar tds elementos das tabelas
                .select(["classes.*", "users.*"]);

            return response.json(classes);
        } catch (error) {
            console.log(error);
        }
    }

    async create(request: Request, response: Response) {
        // const data = request.body;
        // console.log(data);

        // desestruturação que possibilita extrair dados de arrays ou objetos em variáveis distintas.
        // Desestruturação de array var [one, two, three] = foo;
        // Desestruturação de objeto var {one, two, three} = foo;
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

        const transactionSql = await db.transaction();

        try {
            // const arrayUser = await transactionSql().select(["id", "name"]).from("accounts");
            // console.log(arrayUser);

            /* function* UserA() {
                for (let i = 0; i < arrayUser.length; i++) {
                    // console.log(arrayUser[i]);
                    // account_id = arrayUser[i].id;
                    const account_id = arrayUser[i].id;
                    // console.log(account_id);

                    // name = arrayUser[i].name;
                    const name = arrayUser[i].name;
                    // console.log(name);
                    yield {account_id, name};
                }
            }
            const userA = UserA(); */

            // const account_id = userA.next().value.account_id;

            const insertedUsersIds = await transactionSql("users").insert({
                // account_id,
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUsersIds[0];

            const insertedClassesIds = await transactionSql("classes").insert({
                subject,
                cost,
                user_id,
            });

            const class_id = insertedClassesIds[0];

            // const classSchedule = schedule.map((scheduleItem: any) => {
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            });

            await transactionSql("class_schedule").insert(classSchedule);

            // esperar fazer as alterações sem erro e td ao msm tempo
            await transactionSql.commit();

            return response.status(201).send();
        } catch (error) {
            await transactionSql.rollback();

            console.error(error);

            return response.status(400).json({
                error: "erro inesperado ao criar uma class",
            });
        }
    }
}
