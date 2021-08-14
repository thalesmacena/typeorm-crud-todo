import express from 'express';
import 'reflect-metadata';
import createConnection from './database';
import { routes } from './routes';

class App {
  public server: express.Application;

  constructor() {
    createConnection();
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
