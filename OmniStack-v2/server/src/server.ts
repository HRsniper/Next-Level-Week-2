import express from "express";
import cors from "cors";

import { config } from "dotenv";
config({ path: __dirname + "./env" });
// import * as dotenv from "dotenv";
// dotenv.config();

import { routes } from "./routes";

import { errorHandler } from "./middleware/errorHandler";

const app = express();
console.log("\nServidor Iniciado");

app.use(errorHandler);
app.use(cors()); //allowedMethods()
app.use(express.json()); //bodyParser
app.use(routes);

/* 
GET -  buscar ou listar uma informação
POST - criar uma nova informação
PUT - atualizar uma informação existente
DELETE - deletar uma informação existente
*/
app.get("/", (request, response) => {
    return response.json({
        message: "Servidor Online",
    });
});

// http://localhost:3333/
app.listen(process.env.PORT /* || 3333 */);
