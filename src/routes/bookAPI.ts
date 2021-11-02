import bookModel from '../models/bookModel';

export const getBookList = async (req: any, res: any) => {
  bookModel.find((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result))
      res.send(result);
    }
  });
};

export const createBook = async (req: any, res: any) => {
  let Book = new bookModel(req.body);
  Book.save((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      console.log(JSON.stringify(result))
      res.send(result);
    }
  });
};

export const updateBook = async (req: any, res: any) => {
  bookModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ msg: 'Updated successfully' }))
    .catch(() =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
};

export const deleteBook = async (req: any, res: any) => {
  bookModel.findByIdAndRemove(req.params.id, req.body)
    .then(() => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(() => res.status(404).json({ error: 'No such a book' }));
};