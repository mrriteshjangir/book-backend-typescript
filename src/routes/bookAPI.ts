import * as express from "express";

const router = express.Router();

// Load Book model
const Book = require('../models/bookModel');


router.get('/', (req:any, res:any) => {
  Book.find()
    .then(books => res.json(books))
    .catch(() => res.status(404).json({ nobooksfound: 'No Books found' }));
});


router.get('/:id', (req:any, res:any) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(() => res.status(404).json({ nobookfound: 'No Book found' }));
});


router.post('/', (req:any, res:any) => {
  Book.create(req.body)
    .then(() => res.json({ msg: 'Book added successfully' }))
    .catch(() => res.status(400).json({ error: 'Unable to add this book' }));
});


router.put('/:id', (req:any, res:any) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ msg: 'Updated successfully' }))
    .catch(() =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


router.delete('/:id', (req:any, res:any) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(() => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(() => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;