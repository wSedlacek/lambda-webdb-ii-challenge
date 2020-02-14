import * as Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('cars').truncate();
  await knex('cars').insert([
    {
      vin: '123',
      make: 'A Inc.',
      model: 'Model A',
      mileage: 100,
      transmission: null,
      title: 'CLEAN',
    },
    {
      vin: '456',
      make: 'B Inc.',
      model: 'Model B',
      mileage: 200,
      transmission: 'AUTO',
      title: 'SAVAGED',
    },
    {
      vin: '789',
      make: 'B Inc.',
      model: 'Model 3',
      mileage: 300,
      transmission: 'MANUAL',
      title: null,
    },
  ]);
};
