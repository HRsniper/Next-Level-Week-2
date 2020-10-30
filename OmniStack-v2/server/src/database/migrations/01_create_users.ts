import Knex from "knex";
// import knex from "knex";

// quais alterações quero fazer
export async function up(knex: Knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();

        /* table
            .integer("account_id")
            .notNullable()
            .references("id")
            .inTable("accounts"); */

        table
            .string("name")
            .notNullable()
            .references("username")
            .inTable("accounts")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");

        // table.string('name').notNullable();
        table.string("avatar").notNullable();
        table.string("whatsapp").notNullable();
        table.string("bio").notNullable();
    });
}

// se acontecer erro o que fazer
export async function down(knex: Knex) {
    return knex.schema.dropTable("users");
}
