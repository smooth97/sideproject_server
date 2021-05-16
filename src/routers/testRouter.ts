import { Router } from 'express';

const testRouter = Router();

testRouter.get('/', (req, res) => {
  res.send('<h1>RestAPI Test</h1>');
});

export default testRouter;