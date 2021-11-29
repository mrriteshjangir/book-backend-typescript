import { NextFunction, Request, Response } from "express";
import Audit from './model'

import { IRequest } from "../customeInterface";

export const addAsyncLog = (auditObj: any) => {
  const new_audit = new Audit(auditObj);
  new_audit.save((err: any) => {
    if (err) { console.log("Error while adding new audit log :", err); }
  });
}

export const saveAudit = async (req: IRequest | Request, res: Response, next: NextFunction,  model?: any) => {
  try {
    const auditObj: any = {};

    auditObj.request_type = req.method;
    auditObj.request_route = req.path;
    auditObj.response_status_code = res.statusCode;
    auditObj.ips = req.ip;
    auditObj.description = (req as IRequest).description;

    if (model) {
      auditObj.mutated_document_id = model._id;
      auditObj.mutated_document_collection = model.collection.collectionName;
    }

    addAsyncLog(auditObj);

  } catch (error) {
    console.log("Error while addit audit log :", error);
    next();
  }
};

export const getAudit = (req: Request, res: Response, next: NextFunction) => {
  try {
    Audit.find()
      .then((results: any) => {
        return res.status(200).json({ Logs: results, count: results.length });
      });
  } catch (err) { console.log(err); }
};