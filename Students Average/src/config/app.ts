import express from 'express';
import Middlewares from './middlewares';
import Routes from './routes';

class App {
  app = express();

  constructor() {
    this.middlewares();
    this.routes();
  }

  middlewares() {
    new Middlewares(this.app);
  }

  routes() {
    new Routes(this.app);
  }
}

export default new App().app;
