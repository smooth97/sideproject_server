import { Pool, PoolClient } from 'pg';

const {
  POSTGRE_HOST,
  POSTGRE_PORT,
  POSTGRE_USER,
  POSTGRE_PASSWORD,
  POSTGRE_DATABASE,
  POSTGRE_MAX
} = process.env;

const pool = new Pool({
  host: POSTGRE_HOST,
  port: +POSTGRE_PORT,
  user: POSTGRE_USER,
  password: POSTGRE_PASSWORD,
  database: POSTGRE_DATABASE,
  max: +POSTGRE_MAX
});

export const getClient = async () => await pool.connect();

export const query = async (sql: string, values?: any[]) => {
  let client: PoolClient;
  let result: any;
  let error: any;

  try {
    client = await pool.connect();
    result = await client.query(sql, values);
  } catch (err) {
    error = err;
  } finally {
    if (client) client.release();
  }

  if (error) throw error;

  return result;
};