const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  _id:{
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId() 
  },
  title:{ 
    type: String,
    required: true,
    unique: true
  },
  launchYear: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  pages: Number
});

const Model = mongoose.model("Book", BookSchema);

module.exports = Model;