const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'Shadow';
const client = new MongoClient(url);



async function getData() {
    let result = await client.connect();
    let db = result.db('database')
    let collection = db.collection('inventory')
    console.log(collection.find({}.toArray()))
}

getData();