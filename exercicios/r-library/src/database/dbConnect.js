const DB_MONGO = process.env.DB_MONGO;
const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect:', err);
  }
};

module.exports = connect;
