import { Express, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import Log from 'node-color-log';

export default class Middlewares {
  constructor(app: Express) {
    app.use(cors({ origin: true }));
    app.use(helmet());
    app.use(urlencoded({ extended: true }));
    app.use(json());

    Log.info('Importação de middlewares concluídos');
  }
}
