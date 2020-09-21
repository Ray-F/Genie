const mongoClient = require('../models/mongoConnection');
const mongo = require("mongodb");
const { getAllTerms } = require('../models/awsComprehendModel');


const utilityFunction = async (req, res, next) => {
  res.json({ statusCode: "Successfully made utility function call!"});
}

const updateStatus = async(req, res, next) => {
  const clientsCollection = mongoClient.db("teamregex").collection("clients");

  const response = {
    status: req.body.status,
  };

  await clientsCollection.updateOne(
    { _id: mongo.ObjectId(req.body.object_id) },
    { $set: response }
  );
}

module.exports = {
  utilityFunction,
  updateStatus
}
