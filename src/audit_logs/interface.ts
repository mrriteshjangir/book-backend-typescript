import { Document } from "mongoose";

export default interface IAudit extends Document {
    request_type: string,
    request_route: string,
    response_status_code: number,
    description: string,
    created_date: string,
    ips:object,
    mutated_document_id: string,
    mutated_document_collection: string
}