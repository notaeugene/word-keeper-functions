const connectToDatabase = require('../../db')
const allowCors = require('../../utils/cors');

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('entries');
  const data = await collection.find({}).toArray();
  res.status(200).send(data)
};

module.exports = allowCors(handler);
