import Knex from "knex";
// import knex from "knex";

// quais alterações quero fazer
export async function up(knex: Knex) {
    return knex.schema.createTable("accounts", (table) => {
        table.increments("id").primary();
        table.string("username").notNullable();
        table.string("lastname").notNullable();
        table.string("email").notNullable();
        table.string("passwordHash").notNullable();
        // table.string("password").notNullable();
        table.unique(["email"]);
        
        
        table
            .timestamp("create_at")
            .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
            .notNullable();

        table
            .timestamp("updated_at")
            .defaultTo(knex.fn.now())
            // .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
            .notNullable();
    });
}

// se acontecer erro o que fazer
export async function down(knex: Knex) {
    return knex.schema.dropTable("accounts");
}
