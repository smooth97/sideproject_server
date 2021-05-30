import { Pool, PoolClient } from 'pg';

const {
  POSTGRE_HOST,
  POSTGRE_PORT,
  POSTGRE_USER,
  POSTGRE_PASSWORD,
  POSTGRE_DATABASE,
  POSTGRE_MAX
} = process.env;

class Postgre {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: POSTGRE_HOST,
      port: +POSTGRE_PORT,
      user: POSTGRE_USER,
      password: POSTGRE_PASSWORD,
      database: POSTGRE_DATABASE,
      max: +POSTGRE_MAX
    });
  }

  getClient = async () => await this.pool.connect();

  query = async (sql: string, values?: any[]) => {
    let client: PoolClient;
    let result: any;
    let error: any;
  
    try {
      client = await this.pool.connect();
      result = await client.query(sql, values);
    } catch (err) {
      error = err;
    } finally {
      if (client) client.release();
    }
  
    if (error) throw error;
  
    return result;
  };
}

export default Postgre;