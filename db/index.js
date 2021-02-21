const MongoClient = require('mongodb').MongoClient;

const DB_URI = process.env.MONGODB_URI;
let cachedDb = null;

const connectToDatabase = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db();

  cachedDb = db;

  return db;
};

module.exports = connectToDatabase;