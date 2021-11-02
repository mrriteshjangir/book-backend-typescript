// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  book_url:{
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  author: {
    type: String,
  },
  desc: {
    type: String
  },
  p_d: {
    type: String
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model('book', BookSchema);