const MongoClient = require('mongodb').MongoClient;

const MONGODB_URI = 'mongodb+srv://teamregexadmin:jR4WMgYbU4vvJvmR@db-teamregex.obzxn.mongodb.net/<dbname>?retryWrites=true&w=majority';

const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    throw new Error(err)
  } else {
    console.log("SERVER_LOG: Mongodb Connected")
  }
});

module.exports = client;
