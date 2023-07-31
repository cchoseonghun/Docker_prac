import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import connect from './schemas';
import router from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

connect();

// app.get('/', (req: Request, res: Response) => {
  //   res.send('hihi');
  // });

app.use('/', router);

app.listen(port, () => {
  console.log(`Server on`);
});