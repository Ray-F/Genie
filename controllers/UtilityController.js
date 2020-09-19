const mongoClient = require('../models/mongoConnection');



const utilityFunction = async (req, res, next) => {
  const database = mongoClient.db('teamregex');

  res.json({ statusCode: 200, message: "Successfully ran utility function!" });
}

module.exports = {
  utilityFunction
}
