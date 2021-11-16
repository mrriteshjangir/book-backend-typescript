import * as Airbrake from '@airbrake/node';
import * as dotenv from 'dotenv';
dotenv.config();

const KEY: string = process.env.AIRKEY as string;
const ID: number = parseInt(process.env.AIRID as string, 10);

export const airbrake:any = new Airbrake.Notifier({
    projectId: ID,
    projectKey: KEY,
    environment: 'production'
});