const BooksModel = require("../models/booksModel");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await BooksModel.find({}, null);
    res.status(200).json(allBooks);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const getBookById = async (req, res) => {
  try {   
    const findBook = await BooksModel.findById(req.params.id);
    res.status(200).json(findBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewBook = async (req, res) => {
  try {
    const {
      title,
      launchYear,
      available,
      publisher,
      gender,
      writer,
      pages
    } = req.body;

    const newBook = new BooksModel({
      title,
      launchYear,
      available,
      publisher,
      gender,
      writer,
      pages
    });
    const savedBook = await newBook.save();
    res
      .status(200)
      .json({ message: "New Book added successfully!", savedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateBookById = async (req, res) => {
  try {
    const {
      title,
      launchYear,
      available,
      publisher,
      gender,
      writer,
      pages,
    } = req.body;
    const updateBook = await BooksModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        launchYear,
        available,
        publisher,
        gender,
        writer,
        pages,
      }
    );
    res.status(200).json(updateBook);
  } catch {
  console.error(error);
  res.status(500).json({ message: error.message });
}
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const findBooks = await BooksModel.findById(id);

    if (findBooks == null) {
      return res.status(404).json({ message: `Book with id ${id} not found` })
    };
    await findBooks.remove();
    res.status(200).json({ message: `Book with id ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBook,
};