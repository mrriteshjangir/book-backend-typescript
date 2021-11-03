import * as mongoose from "mongoose";
import { Schema } from "mongoose"
import IBook from "../interfaces/bookInterface";

const BookSchema: Schema = new Schema(
  {
    title:{type: String,required:true},
    author:{type: String,required:true},
    price:{type: Number,required:true},
    details:{type: String,required:true},
  },
  {
    timestamps:true
  }
);

export default mongoose.model<IBook>('books',BookSchema);