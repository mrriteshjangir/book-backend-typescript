import { NextFunction, Request, Response } from "express";

import * as mongoose from 'mongoose';
import Audit from './model'

import { airbrake } from "../AirNote";

export const saveAudit = async (req: Request, res: Response, next: NextFunction) => {

    let { title , author } = req.body;

    let description = title +' added by '+author;

    const audit_log = new Audit({
        description, 
    });

    return audit_log
        .save()
        .then((result) => {
            res.status(201).json({
                audit_log: result
            });
        })
        .catch((err) => {
            airbrake.notify({
                error: err,
                context: { component: 'bootstrap' },
            });
        });
};

export const getAudit = (req: Request, res: Response, next: NextFunction) => {
    try {
      Audit.find()
        .then((results: any) => {
          return res.status(200).json(
            {
              Logs: results,
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