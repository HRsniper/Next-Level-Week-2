import path from "path"; //caminhas entro os caminhos

module.exports = {
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
        // filename: './server/database/database.sqlite'
    },
    migrations: {
        directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    useNullAsDefault: true,
};