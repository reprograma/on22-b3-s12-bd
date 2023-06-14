const controller = require("../controllers/booksController"); // conecto ao controller

const express = require("express"); // importo o express

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router
  .post("/new", controller.addNewBook);
router
  .get("/all", controller.getAllBooks);
router
  .get("/:id", controller.getBookById)
  .patch('/:id', controller.updateBookById)
  .delete('/:id', controller.deleteBook);


module.exports = router; //exporto as rotas