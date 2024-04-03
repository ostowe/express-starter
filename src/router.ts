import { Express, Request, Response } from 'express';

const routerSetup = (app: Express) =>
  app.get('/', async (req: Request, res: Response) => {
    res.send('Hello Express!');
  });

export default routerSetup;