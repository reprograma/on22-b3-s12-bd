<<<<<<< HEAD
=======
require("dotenv").config();
>>>>>>> 6fb638a3547e88139e74563b9f3a780521e35322
const express = require("express"); // importo o express
const cors = require("cors"); // importo o cors

const mongoose = require("./database/dbConnect")
const booksRoutes = require("./routes/booksRoute"); // conecto as rotas
const mongoose = require("./database/dbConnect"); // conecto a pasta do Mongo

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();
<<<<<<< HEAD

=======
>>>>>>> 6fb638a3547e88139e74563b9f3a780521e35322

app.use("/library/books", booksRoutes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;