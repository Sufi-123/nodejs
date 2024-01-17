import Boom from 'boom';
import Books from '../models/book.model';

export async function getAllBooks(){
  try{
    const books = await Books.query()
    .patch({ pages: 100})
    .where('pages', '>', 50)
    .where('pages', '<', 666)
    .orderBy('title');
    return books;
  } catch(error){
    console.error(error);
    throw new Error('Error retrieving books');
  }
}

export async function getBooksById(id) {
  try {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>id",id);
    const books =   Books.query().findById(id)

    if (!books) {
      throw Boom.notFound('Books not found');
    }

    return books; // Return the retrieved employee object
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving books'); // Handle other errors
  }
}

export function createBooks(books) {
  return new Books({
    title: books.title,
    id: books.id,
    pages: books.pages,
    author_id: books.author_id
  }).save();
}
