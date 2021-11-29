import * as express from 'express';
import {getAllBooks,createBook} from '../controllers/bookController';

const router=express.Router();

router.get('/getBooks/', getAllBooks)
router.post('/createBook/', createBook);


export default router;