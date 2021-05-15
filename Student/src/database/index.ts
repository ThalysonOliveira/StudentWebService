import Log from 'node-color-log';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export default class Database {
  constructor() {
    this.connect();
  }

  async connect(): Promise<mongoose.Mongoose | undefined> {
    try {
      const connect = await mongoose.connect(
        `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        },
      );
      Log.info('Conectado ao banco de dados com sucesso.');
      return connect;
    } catch (error) {
      Log.error('Falha ao se conectar ao banco de dados \n', error.stack);
    }
  }
}
