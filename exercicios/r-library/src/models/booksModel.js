const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },

  title: {
    type: String,
    required: true,
    unique: true, //significa que ele é único, só pode ter um titulo com o mesmo nome
  },

  launchYear: {
    type: Number,
    required: true,
  },

//se está disponivel
  available: { 
    type: Boolean,
    required: true,
  },

//quem publicou
  publisher: { 
    type: String,
    required: true,
  },

//genero, genre
  gender: { 
    type: String,
    required: true,
  },

  writer: {
    type: String,
    required: true,
  },

  pages: Number, //quando não precisa informar outras informaçoes pode ser direto.
});

const Model = mongoose.model("Books", BookSchema);

module.exports = Model;
 