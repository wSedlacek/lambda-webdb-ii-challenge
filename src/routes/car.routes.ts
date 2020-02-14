import * as express from 'express';

import { db } from '../../knexfile';
import { Car } from '../models/Car';

export const carRouter = express.Router();

carRouter.get('/', async (req, res) => res.json(await db<Car>('cars')));

carRouter.get('/:vin', async ({ params }, res) => {
  const { vin } = params;
  const car = await db<Car>('cars')
    .where({ vin })
    .first();

  res.json(car || { message: 'Car not found' });
});

carRouter.post('/', async ({ body }, res) => {
  try {
    await db<Car>('cars').insert(body);

    const { vin } = body;
    const car = await db<Car>('cars')
      .where({ vin })
      .first();

    res.json(car || { message: 'Car not found' });
  } catch (error) {
    res.json(error.toString());
  }
});

carRouter.put('/:vin', async ({ body, params }, res) => {
  try {
    const { vin } = params;
    await db<Car>('cars')
      .where({ vin })
      .update(body);

    const car = await db<Car>('cars')
      .where({ vin: body.vin })
      .first();

    res.json(car || { message: 'Car not found' });
  } catch (error) {
    res.json(error.toString());
  }
});

carRouter.delete('/:vin', async ({ params }, res) => {
  try {
    const { vin } = params;
    const car = await db<Car>('cars')
      .where({ vin })
      .first();

    await db<Car>('cars')
      .where({ vin })
      .del();

    res.json(car || { message: 'Car not found' });
  } catch (error) {
    res.json(error.toString());
  }
});
