const mongoClient = require('../models/mongoConnection');
const { getAllTerms } = require('../models/awsComprehendModel');


const utilityFunction = async (req, res, next) => {
  res.json({ statusCode: "Successfully made utility function call!"});
}

module.exports = {
  utilityFunction
}
