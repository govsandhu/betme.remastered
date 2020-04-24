import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
  private router: express.Router
  public app: express.Application

  constructor() {
    this.app = express();
    this.router = express.Router();
  }

  private config(): void {
    this.app.use(bodyParser.json);
  }

}

export default new App().app;