const mongoClient = require("../models/mongoConnection");
const mongo = require("mongodb");
const { getAllTerms } = require('../models/awsComprehendModel');

// need to require quoteCalculator.js then apply the function
const quoteCalculator = require("./QuoteCalculator");

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
  const clientCollection = mongoClient.db("teamregex").collection("clients");

  if (req.body.text) {
    const allTerms = await getAllTerms(req.body.text);
    res.json(allTerms);

    let name = "",
      desc = "",
      date = "",
      location = "",
      terms = "",
      email = "",
      serviceType = "",
      staffCount = "",
      serviceTime = "",
      createDate = "";

    createDate = new Date(Date.now()).toISOString();

    for (let i = 0; i<allTerms.entities.length; i++) {
      let ent = allTerms.entities[i];
      if (ent.type == 'NAME') {
        name = ent.content;
      } else if (ent.type == 'DATE_TIME') {
        date = ent.content;
      } else if (ent.type == 'ADDRESS') {
        location = ent.content;
      } else if (ent.type == 'EMAIL') {
        email = ent.content;
      } else if (ent.type == 'QUANTITY') {
        terms += ent.content + ", ";
        
        //extract quantities
        if (ent.content.includes('videographer')) {
          staffCount = ent.content.replace(/[^0-9]/g,'');
          serviceType = 'Videography';
        } else if (ent.content.includes('photographer')) {
          staffCount = ent.content.replace(/[^0-9]/g, "");
          serviceType = 'Photography';
        } else if (ent.content.includes('hours')) {
          serviceTime = ent.content.replace(/[^0-9]/g, "");
        }
      } 
    }

    for (let i = 0; i<allTerms.keywords.length; i++) {
      desc += allTerms.keywords[i] + ', ';
    }

    const uploadData = {
      name: name,
      desc: desc,
      date: new Date(date).toISOString(),
      location: location,
      terms: terms,

      //todo: apply quote calculator
      budgetEstimate: [0, 1000],
      quoted: 420,

      status: "pending",
      email: email,

      service_type: serviceType,
      staff_count: staffCount,
      service_time: serviceTime,

      create_date: createDate,
    };

    clientCollection.insertOne(uploadData);

    return 0;
  }

  res.json({ statusCode: "No text sent!"});
}

module.exports = {
  saveChatbotInput,
  saveFormAiInput
}
