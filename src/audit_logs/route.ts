import * as express from 'express';
import {saveAudit,getAudit} from './controller';

const router=express.Router();

router.get('/getAudit',getAudit);

export default router;