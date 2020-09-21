const mongoClient = require("../models/mongoConnection");
const mongo = require("mongodb");
const { getAllTerms } = require('../models/awsComprehendModel');

const saveChatbotInput = async (req, res, next) => {
  const clientCollection = mongoClient.db("teamregex").collection("clients");

  const clientInput = {
    name: req.body.firstName + " " + req.body.lastName,
    desc: req.body.customProperties.service_description[0],
    date: req.body.customProperties.service_date[0],
    location: req.body.customProperties.service_location[0],
    terms: "",
    budgetEstimate: [0, 1000],
    quoted: 420,
    status: "pending",
    //extras
    email: req.body.email,
    service_type: req.body.customProperties.service_type[0],
    staff_count: req.body.customProperties.staff_count[0],
    service_time: req.body.customProperties.service_time[0],
    create_date: req.body.createDate,
  };

  clientCollection.insertOne(clientInput);

  res.json({ statusDescription: "Data uploaded to db successfully!"});
};

const saveFormAiInput = async (req, res, next) => {
  if (req.body.text) {
    const allTerms = await getAllTerms(req.body.text);
    res.json(allTerms);

    return 0;
  }

  res.json({ statusCode: "No text sent!"});
}

module.exports = {
  saveChatbotInput,
  saveFormAiInput
}