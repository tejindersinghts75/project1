const mongoose = require('mongoose');

const username = 'tejindersinghts75';
const password = 'Macoshark@123';
const database = 'sample_mflix';

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@cluster0.bf9sszk.mongodb.net/${database}`;

const connectToMongo = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};




module.exports = connectToMongo;
