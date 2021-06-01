import { Router } from 'express';
import Postgre from '../utils/db/postgre';
import Mongo from '../utils/db/mongo';

const testRouter = (postgre: Postgre, mongo: Mongo) => {
  const router = Router();
  
  router.get('/', (req, res) => {
    res.send('<h1>RestAPI Test</h1>');
  });

  router.get('/time/postgre', async (req, res) => {
    try {
      const { rows } = await postgre.query(`SELECT TO_CHAR(NOW(), 'YYYY-MM-DD HH24:MI:SS') AS NOW`);
      res.status(200).json({
        code: 200,
        payload: { result: rows }
      });
    } catch (err) {
      console.error(err);

      res.status(400).json({
        code: 400,
        msg: err.toString()
      });
    }
  });

  router.get('/time/mongo', async (req, res) => {
    try {
      const result = await mongo.aggregate('tmp', [
        {
          '$limit': 1
        }, {
          '$addFields': {
            'now': {
              '$dateToString': {
                'date': new Date(), 
                'format': '%Y-%m-%d %H:%M:%S', 
                'timezone': 'Asia/Seoul'
              }
            }
          }
        }, {
          '$project': {
            '_id': 0
          }
        }
      ]);

      res.status(200).json({
        code: 200,
        payload: { result }
      });
    } catch (err) {
      console.error(err);

      res.status(400).json({
        code: 400,
        msg: err.toString()
      });
    }
  });

  return router;
};

export default testRouter;