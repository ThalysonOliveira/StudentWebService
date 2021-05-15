import fs from 'fs';
import path from 'path';
import { Express } from 'express';
import Log from 'node-color-log';

export default class Route {
  RouteConfig(app: Express): void {
    const pathRoutes = fs.existsSync(path.resolve(__dirname, '..', 'routes'));

    if (!pathRoutes) {
      app.get('*', (request, response) => {
        return response.json('Adicione o diretório src/routes');
      });

      return Log.warn('Adicione o diretório src/routes.');
    }

    const routeFiles = fs.readdirSync(path.resolve(__dirname, '..', 'routes'));

    if (!routeFiles.length) {
      app.get('*', (request, response) => {
        return response.json('Adicione suas rotas no diretório src/routes');
      });

      return Log.warn('Adicione suas rotas no diretório src/routes.');
    }

    for (const route of routeFiles) {
      const router = require(`../routes/${route}`);
      app.use(router.default);
    }

    Log.info('Importação de rotas encerrada.');
  }
}
