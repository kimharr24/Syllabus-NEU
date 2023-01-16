/* eslint-disable no-console */
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import SyllabusRouter from './routes/SyllabusRouter';

dotenv.config();

const app: Express = express();
const port = process.env.API_PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/api', SyllabusRouter);

app.get('/fake', (req: Request, res: Response) => {
    res.send({ data: 'some data' });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}.`);
});
