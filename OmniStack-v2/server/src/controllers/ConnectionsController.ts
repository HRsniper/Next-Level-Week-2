import { Request, Response } from "express";
import { db } from "../database/connection";

export class ConnectionsController {
    async index(request: Request, response: Response) {
        const totalConnections = await db("connections").count("* as total"); //nova coluna com os valores do retorno

        const { total } = totalConnections[0];

        return response.json({ total });
    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await db("connections").insert({
            user_id,
        });

        return response.status(201).send();
    }
}
