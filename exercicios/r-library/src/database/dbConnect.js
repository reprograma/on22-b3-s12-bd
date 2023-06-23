<<<<<<< HEAD
=======

const DATABASE_URI = process.env.DATABASE_URI;

>>>>>>> 6fb638a3547e88139e74563b9f3a780521e35322
const mongoose = require("mongoose");

const connect = async () => {
  try {
<<<<<<< HEAD
    mongoose.connect("mongodb+srv://alineandome:a37396125!@cluster0.bti2njj.mongodb.net/rlibrary", {
=======
    mongoose.connect(DATABASE_URI, {
>>>>>>> 6fb638a3547e88139e74563b9f3a780521e35322
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
};
<<<<<<< HEAD
   
=======
>>>>>>> 6fb638a3547e88139e74563b9f3a780521e35322
