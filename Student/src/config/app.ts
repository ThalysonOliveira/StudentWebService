import express from 'express';
import Middlewares from './middlewares';
import Routes from './routes';
import Database from '../database';

class App {
  app = express();

  constructor() {
    this.middlewares();
    this.routes();
    this.database();
  }

  middlewares() {
    new Middlewares(this.app);
  }

  routes() {
    new Routes().RouteConfig(this.app);
  }

  database() {
    new Database();
  }
}

export default new App().app;
