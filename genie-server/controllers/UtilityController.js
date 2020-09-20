const mongoClient = require('../models/mongoConnection');
const { getAllTerms } = require('../models/awsComprehendModel');


const utilityFunction = async (req, res, next) => {
  const text = "My name is Raymond Feng and I love wedding photography. I want 1 videographer and about 10 hours of service. My phone number is 021890788, and I live in Blockhouse Bay, Auckland, New Zealand. The wedding venue is Kalifa Estate. My wedding date is on the first of July 2020.";

  const terms = await getAllTerms(text);
  res.json(terms);
}

module.exports = {
  utilityFunction
}
