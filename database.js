const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');
const connectionString = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(connectionString);
const db = client.db('BudgetTracker');
const userCollection = db.collection('username');
const scoreCollection = db.collection('score');
  
  

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
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

async function addScore(score) {
  scoreCollection.findOneAndUpdate({username:score.username}, 
    {$set:{score:score.score}}, 
    {upsert:true})
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 1000000 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

function getScore(userName) {
  return scoreCollection.findOne({ username: userName });
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getScore,
  getHighScores,
};
