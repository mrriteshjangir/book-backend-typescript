import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';

export const Book = new Schema({
  book_url: String,
  title: String,
  price: Number,
  author: String,
  details:String
});

const bookModel = mongoose.model("books", Book);
export default bookModel;