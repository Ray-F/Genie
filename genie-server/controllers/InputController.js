const mongoClient = require("../models/mongoConnection");
const mongo = require("mongodb");
const { getAllTerms } = require('../models/awsComprehendModel');

// need to require quoteCalculator.js then apply the function

const saveChatbotInput = async (req, res, next) => {
  const clientCollection = mongoClient.db("teamregex").collection("clients");

  const clientInput = {
    name: req.body.firstName + " " + req.body.lastName,
    desc: req.body.customProperties.service_description.slice(2, -2),
    date: req.body.customProperties.service_date.slice(3, -3),
    location: req.body.customProperties.service_location.slice(2, -2),
    terms: "",

    //apply quoteCalculator.js functions here here
    budgetEstimate: [0, 1000],
    quoted: 420,

    status: "pending",
    email: req.body.email,
    service_type: req.body.customProperties.service_type.slice(2, -2),
    staff_count: req.body.customProperties.staff_count.slice(2, -2),
    service_time: req.body.customProperties.service_time.slice(2, -2),
    create_date: req.body.createDate,
  };

  console.log(clientInput);
  
  console.log(req.body.customProperties);

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
