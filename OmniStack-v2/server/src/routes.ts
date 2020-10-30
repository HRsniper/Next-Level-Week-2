import express from "express";
import { ClassesController } from "../src/controllers/ClassesController";
import { ConnectionsController } from "./controllers/ConnectionsController";
import { AccountsController } from "./controllers/AccountsController";
import { authRoute } from "./auth/auth";

// import { authRoute } from "./auth/auth";
// import bodyParser from 'body-parser';

// app de roteamento
// const routes = express.Router();
export const routes = express.Router();

const accountsController = new AccountsController();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

// routes.post("/auth", express.json(), authRoute);
// routes.post("/auth", bodyParser(), authRoute);
routes.post("/auth", authRoute);

// routes.post("/accountsAuth", bodyParser(), accountsController.index);
routes.post("/accountsAuth", accountsController.index);
// routes.get("/accounts", bodyParser(), accountsController.index);
// routes.post("/accounts", bodyParser(), accountsController.create);
routes.post("/accounts", accountsController.create);

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);
