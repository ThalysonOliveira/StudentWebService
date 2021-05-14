import dotenv from 'dotenv';
import Log from 'node-color-log';
import App from './src/config/app';

dotenv.config();

const PORT = process.env.PORT;

App.listen(PORT, async () => {
  Log.info(`Servidor rodando em http://localhost:${PORT}`);
});
