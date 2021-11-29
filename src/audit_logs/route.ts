import * as express from 'express';
import { getAudit } from './controller';

const router=express.Router();

router.get('/getAudit',getAudit);

export default router;