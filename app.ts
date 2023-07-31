import express, { Express, Request, Response } from 'express';
import connect from './schemas';
import router from './routes';

const app: Express = express();
const port = 8080;

connect();

// app.get('/', (req: Request, res: Response) => {
  //   res.send('hihi');
  // });

app.use('/', router);

app.listen(port, () => {
  console.log(`Server on`);
});