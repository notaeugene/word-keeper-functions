const { ObjectId } = require('mongodb');

const connectToDatabase = require('../../db');
const allowCors = require('../../utils/cors');

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('entries');
  const { id } = req.query;
  const { body: { name, translation, examples } } = req;
  const doc = { name, translation, examples };
  await collection.updateOne(
    { _id: ObjectId(id) },
    { $set: doc }
  );
  res.status(200).send();
};

module.exports = allowCors(handler);
