import { Request, Response, NextFunction } from "express";

export async function errorHandler(request: Request, response: Response, next: NextFunction) {
    try {
        return await next();
    } catch (error) {
        return response.status(error.status || 500).send(error);
    }
}
