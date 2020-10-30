import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

/* 
GET -  buscar ou listar uma informação
POST - criar uma nova informação
PUT - atualizar uma informação existente
DELETE - deletar uma informação existente
*/

// corpo - (request body): dados para criação ou atualização de um registro
// route params : identificar qual recurso quero atualizar ou deletar
// query params : paginação , filtros , ordenação

app.get('/', (request, response) => {
    // app.get('/users', (request , response) => {
    // app.delete('/users:id', (request , response) => { //parametro
    // app.post('/users', (request , response) => {

    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);//undefined se nao colocar app.use(express.json());
    // { name: 'DEV', age: 90 }

    // const users = [
    //     { name:'HR', age:23 },
    //     { name:'mayk', age:23 },
    //     { name:'diego', age:25 }
    // ];
    // return response.json(users);
    return response.json({
        message: "ola dev"
    });
});

// http://localhost:3333/
app.listen(3333);