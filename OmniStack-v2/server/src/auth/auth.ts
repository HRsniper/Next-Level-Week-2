import { Request, Response, NextFunction } from "express";

import "dotenv/config";
import jwt from "jsonwebtoken";

import { db } from "../database/connection";
import { compare } from "../utilities/bcryptHash";

const Secret = process.env.JWT_SECRET/*  || "secret" */; // Este código significa que nossos tokens serão assinados com a variável de ambiente JWT_SECRET
const secret = String(Secret);

export async function authRoute(request: Request, response: Response /* , next: NextFunction */) {
    // console.log(request.body);
    // response.status(200).send("Eu sou a rota de autenticação");
    // response.status(200).json({ message: "Eu sou a rota de autenticação" });

    const { /* username */email, password } = request.body;

    // if (!username) {
    if (!email) {
        // return response.status(422).json({ erro: "Nome de usuário obrigatório" });
        return response.status(422).json({ erro: "Email obrigatório" });
    }
    if (!password) {
        return response.status(422).json({ erro: "Senha obrigatória" });
    }

    const dbUser = await db.first(["id", "passwordHash"]).from("accounts").where({ email });
    // const dbUser = await db.first(["id", "passwordHash"]).from("accounts").where({ username });
    if (!dbUser) {
        return response.status(401).json({ erro: "Esse usuário não existe" });
    }
    // se a senha inserida é igual ao hash da senha do banco de dados
    if (await compare(password, dbUser.passwordHash)) {
        const payload = { sub: dbUser.id };
        const token = jwt.sign(payload, secret);
        return response.status(200).json({
            token,
            // acesso: "Concedido",
        });
        // A rota auth só retorna um token assinado se o nome de usuário e a senha estiverem corretos.
    } else {
        // Caso contrário, um erro é fornecido.
        response.status(401).json({ erro: "Senha incorreta" });
    }
    /*
    Assina e retorna o token exatamente como antes 
    exceto que, desta vez, sub é o 
    ID do usuário do banco de dados * real. 
    */

    // Uma abordagem ingênua para verificar essas informações
    // if (username === "hr" && password === "123") {
    //     return response.status(200).json({ acesso: "Concedido" });
    // }
    // Uma abordagem melhor - e mais padrão - é procurar o nome de usuário e a senha
    // fornecidos em um banco de dados de usuários.

    /*
    // vamos apenas fazer a simulação com um número simples.
    const payload = { sub: 1 }; // Normalmente, seria um nome de usuário ou ID de usuário ou algo que identifique um usuário único em seu sistema.

    // A função jwt.sign() tem dois parâmetros:
    // payload: os dados reais que queremos armazenar no token
    // secret: uma chave secreta com a qual assinamos o token. Apenas nosso servidor saberá o segredo.
    const token = jwt.sign(payload, secret);
    // return response.status(200).json(token); // { "sub": 1, "iat": 1598113416 }
    return response.status(200).json(token); // { "sub": 1, "iat": 1598113416 }
    */
}
