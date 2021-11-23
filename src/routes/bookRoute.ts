import * as express from 'express';
import {getAllBooks,createBook} from '../controllers/bookController';
import { saveAudit } from '../audit_logs/controller';

const router=express.Router();

router.get('/getBooks/', getAllBooks)
router.post('/createBook/', createBook, saveAudit);


export default router;