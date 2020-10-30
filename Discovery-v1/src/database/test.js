const db = require('./db');
const createProffy = require("./createProffy");

db.then(async (dbTeste) => {
    proffyValue = {
            name: "Hercules",
            avatar: "https://avatars1.githubusercontent.com/u/63937242?s=460&u=867f0dd9b67de44897fe8e5d28aeab1e06130fcd&v=4",
            whatsapp: "991740833",
            bio: "estudandooooooooooo"
        },

        classValue = {
            subject: 1,
            cost: "80"
            // proffy_id vem pelo db
        },

        classScheduleValues = [
            // class_id vem pelo db apos cadastro da class
            {
                weekDay: 0,
                timeFrom: 720,
                timeTo: 1220
            },
            {
                weekDay: 1,
                timeFrom: 800,
                timeTo: 1220
            }
        ]

    // criar
    // await createProffy(dbTeste, { proffyValue, classValue, classScheduleValues });

    // consultar
    const selectedProffys = await dbTeste.all(" SELECT * FROM proffys");
    // console.log(selectedProffys);
    
    // consultar as classes de um professor e trazer junto seus dados pessoais
    const selectedClassesAndProffys = await dbTeste.all(`
        SELECT classes.*, proffys.*
            FROM proffys
                JOIN classes ON (classes.proffy_id = proffys.id)
                    WHERE classes.proffy_id = 1;
    `);
    // console.log(selectedClassesAndProffys);

    // timeFrom 8h <= 8h
    // timeTo 18h > 18h
    const selectedClassesSchedule = await dbTeste.all(`
        SELECT classes_schedule.*
            FROM classes_schedule
                WHERE classes_schedule.class_id = 1
                    AND classes_schedule.weekDay = 0
                        AND classes_schedule.timeFrom <= 720
                            AND classes_schedule.timeFrom > 1220;
    `);
                // WHERE classes_schedule.class_id = classes_id;

                console.log(selectedClassesSchedule);
});