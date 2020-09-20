const mongoClient = require('../models/mongoConnection');

const getSettings = async (req, res, next) => {
  const settingsCol = mongoClient.db("teamregex").collection("settings");

  const settingsArray = await settingsCol.find({}).toArray();

  res.json(settingsArray[0]);
}

const setSettings = (req, res, next) => {
  console.log(req.body);

  // save stuff from body to database
}

module.exports = {
  getSettings,
  setSettings
}
