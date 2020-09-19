const mongoClient = require('../models/mongoConnection');



const utilityFunction = async (req, res, next) => {
  const clientCollection = () => mongoClient.db('teamregex').collection('clients');

  res.json({ statusCode: 200, message: "Successfully ran utility function!" });
}

module.exports = {
  utilityFunction
}
