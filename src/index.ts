require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import testRouter from './routers/testRouter';

const { NODE_ENV, PORT } = process.env;

const app = express();
const server = createServer(app);

if (NODE_ENV === 'development') app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', testRouter);

server.listen(PORT, () => console.log(`> http://localhost:${PORT}`));