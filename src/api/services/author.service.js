import Boom from 'boom';
import Authors from '../models/author.model';

export async function getAllAuthors() {
  try{
    const authors = await Authors.query()
    .select('first_name', 'last_name', 'email', 'address')
    .where('address', '=', 'Radiant')
    .orderBy('last_name');
    return authors;
  }catch(error){
    console.error(error);
    throw new Error('Error retrieving authors');
  }
}

export async function getAuthorsById(id) {
  try {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>id",id);
    const authors =   Authors.query().findById(id)

    if (!authors) {
      throw Boom.notFound('Authors not found');
    }

    return authors; // Return the retrieved employee object
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving authors'); // Handle other errors
  }
}

export function createAuthors(authors) {
  return new Authors({
    title: authors.title,
    id: authors.id,
    pages: authors.pages,
    author_id: authors.author_id
  }).save();
}
