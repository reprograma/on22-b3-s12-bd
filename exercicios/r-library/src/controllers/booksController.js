const BooksModel = require('../models/booksModel');

const addNewBook = async (req, res) => {
  try {
    const newBookData = req.body;
    const newBook = new BooksModel(newBookData);
    const savedBook = await newBook.save();
    res
      .status(201)
      .json({ message: 'New book added successfully!', savedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await BooksModel.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await BooksModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBookById = async (req, res) => {
  try {
    const updatedBookData = req.body;
    const updatedBook = await BooksModel.findByIdAndUpdate(
      req.params.id,
      updatedBookData,
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await BooksModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBook,
};
