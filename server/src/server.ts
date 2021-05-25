import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { authenticateJWT } from './apis/auth';
import routes from './route';

const app = express();
const port = 8000;

app.use(morgan('dev')); // Log every request to the console
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.json()); // Parsing json objects
app.use(bodyParser.urlencoded({ extended: true })); // Parsing bodies from URL

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:80',
      // 'https://dev.kanProtoAddressInTheFuture.com',
      // 'https://kanProtoAddressInTheFuture.com',
      // 'https://www.kanProtoAddressInTheFuture.com',
    ],
    credentials: true,
  }),
);

app.use(authenticateJWT);
app.use('/', routes);

app.listen(port);
// eslint-disable-next-line no-console
console.log(`Now, the server starts on port ${port}`);
