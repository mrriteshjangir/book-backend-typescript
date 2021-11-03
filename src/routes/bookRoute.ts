import * as express from 'express';
import Controller from '../controllers/bookController';

const router=express.Router();

router.get('/getBooks/',Controller.getAllBooks);
router.post('/createBook/',Controller.createBook);

export = router;