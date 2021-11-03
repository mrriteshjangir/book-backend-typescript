import { NextFunction, Request, Response } from "express";
import * as mongoose from 'mongoose';
import Book from '../models/bookModel';

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
  Book.find()
    .exec()
    .then((results:any) => {
      return res.status(200).json(
        {
          books: results,
          count: results.length
        }
      )
    })
    .catch((error:any) => {
      return res.status(500).json({
        message: error.message,
        error
      })
    })
};

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title, price, details } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title,
        price,
        details
    });

    return book
        .save()
        .then((result:any) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error:any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default {getAllBooks,createBook};