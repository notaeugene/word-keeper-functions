const connectToDatabase = require('../../db');
const allowCors = require('../../utils/cors');

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('entries');
  const { body: { name, translation, examples } } = req;
  const doc = { name, translation, examples };
  const insertedDoc = await collection.insertOne(doc);
  res.status(200).send(insertedDoc.ops[0]);
};

module.exports = allowCors(handler);
