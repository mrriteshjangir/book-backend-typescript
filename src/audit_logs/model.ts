import * as mongoose from "mongoose";
import { Schema } from "mongoose"
import IAudit from "./interface";

const AuditSchema: Schema = new Schema(
    {
        description: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IAudit>('audit_logs', AuditSchema);