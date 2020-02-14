import * as Knex from 'knex';

export const up = async (knex: Knex) => {
  await knex.schema.createTable('cars', (tbl) => {
    tbl
      .string('vin')
      .primary()
      .notNullable();

    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.integer('mileage').notNullable();

    tbl.enum('transmission', ['AUTO', 'MANUAL']);
    tbl.enum('title', ['CLEAN', 'SAVAGED']);
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTable('cars');
};
