
/*const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://cs260:budget@cluster0.irdqs1w.mongodb.net/?`;
const client = new MongoClient(url);
const db = client.db('BudgetTracker');
const userCollection = db.collection('username');
//const scoreCollection = db.collection('score');*/


  
  const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://cs260:budget@cluster0.irdqs1w.mongodb.net/?`;
  const client = new MongoClient(url);
  const db = client.db('BudgetTracker');
  const userCollection = db.collection('user');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const poorStudent = {
    name: 'Sally',
    summary: 'Freshman student trying to budget',
    saved: 200
  };
  await userCollection.insertOne(poorStudent);

  const richStudent = {
    name: 'Joe',
    summary: 'Summer sales',
    saved: 2000
  }
  await userCollection.insertOne(richStudent);

  // Query the documents
  const query = { name: 'richStudent'};
  const options = {
    sort: { saved: -1 },
    limit: 10,
  };

  const cursor = userCollection.find(query, options);
  const people = await cursor.toArray();
  people.forEach((i) => console.log(i));
}

  

// This will asynchronously test the connection and exit the process if it fails
/*(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getHighScores,
};*/
