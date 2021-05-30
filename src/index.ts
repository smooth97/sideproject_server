require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createServer } from 'http';
import Postgre from './utils/db/postgre';
import Mongo from './utils/db/mongo';
import testRouter from './routers/testRouter';

const { NODE_ENV, PORT } = process.env;

const postgre = new Postgre();
const mongo = new Mongo();

const app = express();
const server = createServer(app);

/*if (NODE_ENV === 'development')*/ app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/test', testRouter(postgre, mongo));

server.listen(PORT, () => console.log(`> http://localhost:${PORT}`));