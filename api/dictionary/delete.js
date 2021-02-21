const { ObjectId } = require('mongodb');
const connectToDatabase = require('../../db');
const allowCors = require('../../utils/cors');

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('entries');
  await collection.deleteOne({ _id: ObjectId(req.query.id) })
  res.status(200).send();
};

module.exports = allowCors(handler);
