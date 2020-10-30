// servidor

const express = require('express');
const server = express();

const { pageLanding, study, giveClasses, saveClasses } = require('./pages');

// configuração nunjucks(template engine)
const nunjucks = require('nunjucks');
/* pasta com os html*/
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    /* nao guarda em memoria */
});

// configuração server
server
    //arquivos estáticos(css, imgs, scripts)
    .use(express.static("src"))
    // receber request.body
    .use(express.urlencoded({extended: true}))
    // rotas
    .get("/", pageLanding)
    .get("/study", study)
    .get("/give-classes", giveClasses)
    .post("/save-classes", saveClasses)
    // iniciar porta
    .listen(5000);

// import express from "express";
// const server = express();
// server.listen(5000);