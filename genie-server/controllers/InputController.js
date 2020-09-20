const mongoClient = require("../models/mongoConnection");
const mongo = require("mongodb");

const saveChatbotInput = (req, res, next) => {
  const clientCollection = mongoClient.db("teamregex").collection("clients");

  const clientInput = {
    email: req.body.email,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    create_date: req.body.createDate,
    service_description: req.body.customProperties.service_description,
    service_type: req.body.customProperties.service_type,
    staff_count: req.body.customProperties.staff_count,
    service_time: req.body.customProperties.service_time,
    service_location: req.body.customProperties.service_location,
    service_date: req.body.customProperties.service_date,
  };

  clientCollection.insertOne(clientInput);

  res.json({ statusDescription: "Data uploaded to db successfully!"});
};

module.exports = {
  saveChatbotInput
}
