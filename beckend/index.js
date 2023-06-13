const { MongoClient } = require('mongodb');

const username = 'tejindersinghts75';
const password = 'Macoshark@123';
const database = 'sample_mflix';

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@cluster0.bf9sszk.mongodb.net/${database}`;

const client = new MongoClient(uri);

async function getData() {
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('movies');
    const response = await collection.find({}).toArray();
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}

getData();
