const mongoClient = require("../models/mongoConnection");
const mongo = require("mongodb");

const saveChatbotInput = (req, res, next) => {
  const clientCollection = mongoClient.db("teamregex").collection("clients");

  const clientInput = {
    name: req.body.firstName + " " + req.body.lastName,
    desc: req.body.customProperties.service_description,
    date: req.body.customProperties.service_date,
    location: req.body.customProperties.service_location,
    terms: "",
    budgetEstimate: [0, 1000],
    quoted: 420,
    status: "pending",
    //extras
    email: req.body.email,
    service_type: req.body.customProperties.service_type,
    staff_count: req.body.customProperties.staff_count,
    service_time: req.body.customProperties.service_time,
    create_date: req.body.createDate,
  };

  clientCollection.insertOne(clientInput);

  res.json({ statusDescription: "Data uploaded to db successfully!"});
};

module.exports = {
  saveChatbotInput
}
