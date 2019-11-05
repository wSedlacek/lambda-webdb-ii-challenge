import * as express from 'express';
import * as helmet from 'helmet';

import { carRouter } from './routes/car.routes';

export const server = express();

server.use(helmet());
server.use(express.json());
server.use('/car', carRouter);
