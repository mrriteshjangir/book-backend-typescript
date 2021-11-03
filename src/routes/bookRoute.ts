import * as express from 'express';
import * as Controller from '../controllers/bookController';

const router=express.Router();

router.get('/getBooks/', Controller.getAllBooks)
router.post('/createBook/', Controller.createBook);

export = router;