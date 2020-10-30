import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* 
GET -  buscar ou listar uma informação
POST - criar uma nova informação
PUT - atualizar uma informação existente
DELETE - deletar uma informação existente
*/
app.get('/', (request, response) => {
    return response.json({
        message: "ola dev"
    });
});

// http://localhost:3333/
app.listen(3333);