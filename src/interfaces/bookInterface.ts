import { Document } from "mongoose";

export default interface IBook extends Document{
    title:string;
    author:string;
    price:number;
    details:string;
}