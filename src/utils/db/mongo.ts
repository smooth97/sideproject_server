import { Db, MongoClient, MongoClientOptions } from 'mongodb';

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DATABASE,
  MONGO_POOLSIZE
} = process.env;

const uri = `mongodb://${MONGO_USER}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_HOST}:${MONGO_PORT}`;
const options: MongoClientOptions = {
  authSource: 'admin',
  readPreference: 'primary',
  ssl: false,
  useUnifiedTopology: true,
  poolSize: +MONGO_POOLSIZE
};

class Mongo {
  private db: Db;

  constructor() {
    (async () => {
      this.db = await this.createConnection();
    })();
  }

  private createConnection(): Promise<Db> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(uri, options, (err, client) => {
        if (err) {
          reject(err);
          return;
        }
  
        const db = client.db(MONGO_DATABASE);
        resolve(db);
      });
    })
  };

  findOne(collection: string, filterQuery: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).findOne(filterQuery, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  find(collection: string, filterQuery: any, projection?: any): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).find(filterQuery, projection).toArray((err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  aggregate(collection: string, query: any[]): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).aggregate(query).toArray((err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  insertOne(collection: string, doc: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).insertOne(doc, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  insertMany(collection: string, docs: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).insertMany(docs, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  updateOne(collection: string, filterQuery: any, updateQuery: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).updateOne(filterQuery, updateQuery, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  updateMany(collection: string, filterQuery: any, updateQuery: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).updateMany(filterQuery, updateQuery, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  deleteOne(collection: string, filterQuery: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).deleteOne(filterQuery, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  deleteMany(collection: string, filterQuery: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).deleteMany(filterQuery, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }
}

export default Mongo;