import * as mongoose from "mongoose";
import { Schema } from "mongoose"
import IAudit from "./interface";

const AuditSchema: Schema = new Schema(
    {
        request_type : { type : String },
        request_route : { type : String },
        response_status_code : { type : Number },
        description : { type: String},
        created_date : { type: Date, default: Date.now },
        ips : { type : Array},
        mutated_document_id : { type : String },
        mutated_document_collection : { type : String }
    }
);

export default mongoose.model<IAudit>('audit_logs', AuditSchema);