require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import Postgre from './utils/db/postgre';
import Mongo from './utils/db/mongo';
import testRouter from './routers/testRouter';
import { loggerMiddleware } from './utils/logger/winston';

const { NODE_ENV, PORT } = process.env;

const postgre = new Postgre();
const mongo = new Mongo();

const app = express();
const server = createServer(app);

app.disable('x-powered-by');

/*if (NODE_ENV === 'development')*/ app.use(cors());
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/test', testRouter(postgre, mongo));

server.listen(PORT, () => console.log(`> http://localhost:${PORT}`));