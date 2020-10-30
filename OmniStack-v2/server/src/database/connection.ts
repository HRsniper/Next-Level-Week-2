import knex from "knex";
import path from "path"; //caminhas entro os caminhos

// migrations - controlam as versões do banco de dados

// const db = knex({
export const db = knex({
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, "database.sqlite")
    },
    useNullAsDefault: true
});

// export default db;
