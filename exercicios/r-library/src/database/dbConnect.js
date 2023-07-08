/*const DATABASE_URI = process.env.DATABASE_URI;

const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};*/

const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://graciellespereira23:**20GR07**@cluster0.ryumkpa.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("vai brazel");
  } catch (error) {
    console.log(error);    
  }
}

module.exports = connect;