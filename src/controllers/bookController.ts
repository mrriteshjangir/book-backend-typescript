import { NextFunction, Request, Response } from "express";
import * as mongoose from 'mongoose';
import Book from '../models/bookModel';
import { airbrake } from "../AirNote";

import { saveAudit } from "../audit_logs/controller";

import { IRequest } from "../customeInterface";

const getAllBooks = (req: IRequest | Request, res: Response, next: NextFunction) => {
  try {
    Book.find()
      .then((results: any) => {
        res.status(200).json({ books: results, count: results.length });
      })
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

const createBook = async (req: IRequest | Request, res: Response, next: NextFunction) => {

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
      res.status(200).json({ book: result });

      (req as IRequest).description= title + ' added';

      saveAudit(req as IRequest, res, next);
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