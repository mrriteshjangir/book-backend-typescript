import { NextFunction, Request, Response } from "express";
import * as mongoose from 'mongoose';
import Book from '../models/bookModel';
import { airbrake } from "../AirNote";

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
  try {
    Book.find()
      .then((results: any) => {
        return res.status(200).json(
          {
            books: results,
            count: results.length
          }
        )
      });
    } catch (err) {
    airbrake.notify({
      error: err,
      context: { component: 'bootstrap' },
      environment: { env1: 'value' },
      params: { param1: 'value' },
      session: { session1: 'value' },
    });
  }

};

const createBook = (req: Request, res: Response, next: NextFunction) => {

  let { title, author, price, details } = req.body;

  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title,
    author,
    price,
    details
  });

  return book
    .save()
    .then((result) => {
      next();
      return res.status(201).json({
        book: result
      });
    })
    .catch((err) => {
      airbrake.notify({
        error: err,
        context: { component: 'bootstrap' },
        environment: { env1: 'value' },
        params: { param1: 'value' },
        session: { session1: 'value' },
      });
    });
};

export { getAllBooks, createBook };