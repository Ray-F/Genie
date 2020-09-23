const mongoClient = require('../models/mongoConnection');
const mongo = require("mongodb");
const { getAllTerms } = require('../models/awsComprehendModel');


const utilityFunction = async (req, res, next) => {
  const clientsCollection = mongoClient.db('teamregex').collection("clients");

  const dates = [
    '2020-09-23T08:31:02.07Z',
    '2020-05-10T08:31:02.07Z',
    '2020-09-02T08:31:02.07Z',
    '2020-10-03T08:31:02.07Z',
    '2020-02-04T08:31:02.07Z'
  ];

  const futureDates = [
    '2020-10-30T08:31:02.07Z',
    '2020-10-01T08:31:02.07Z',
    '2020-09-29T08:31:02.07Z',
    '2020-11-12T08:31:02.07Z',
    '2020-12-16T08:31:02.07Z',
  ];

  const response = {
    archived: null,
    status: 'pending',
    create_date: '2020-09-23T08:31:02.07Z',
    date: '2020-11-12T08:31:02.07Z'
  }

  clientsCollection.updateMany({}, { $set: response});

  res.json({ statusCode: "Successfully made utility function call!"});
}

const updateStatus = async(req, res, next) => {
  const clientsCollection = mongoClient.db("teamregex").collection("clients");

  const response = {};

  if (req.body.status !== null) {
    response.status = req.body.status
  }

  if (req.body.archived !== null) {
    response.archived = req.body.archived
  }



  await clientsCollection.updateOne(
    { _id: mongo.ObjectId(req.body.object_id) },
    { $set: response }
  );

  res.json({ statusCode: 'Successfully updated records'});
}

module.exports = {
  utilityFunction,
  updateStatus
}
