import { Document } from "mongoose";

export default interface IAudit extends Document{
    description: string,    
}