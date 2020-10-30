import Knex from "knex";
// import knex from "knex";

// quais alterações quero fazer
export async function up(knex: Knex) {

    return knex.schema.createTable('connections', (table) => {
        table.increments('id').primary();
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');//deletas tds tipo

        table.timestamp('create_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

// se acontecer erro o que fazer
export async function down(knex: Knex) {

    return knex.schema.dropTable('connections');
}