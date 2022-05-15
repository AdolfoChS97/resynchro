import express, { Express } from 'express';
import { synchro } from './middlewares/synchro';
import media from './routes/media';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(synchro, [media]);

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});