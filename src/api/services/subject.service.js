import Boom from 'boom';
import Subject from '../models/subject.model';

export async function getAllSubject() {
  try{
    const subject = await Subject.query()
    .patch({ score: 100 })
    .where('id', '=', 48);
    // .findOne({ name: 'Heyyy'});
    // .where('id', '>', 65)
    // .orderBy('name');
    // .insert({
    //   name: 'Hello World',
    //   email: 'hello@gmail.com'
    // });

    
    return subject;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving subject');
  }
}

export async function getSubjectById(id) {
  try {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>id",id);
    const subject = Subject.query()
   
    
    // .findById(id);
    // .patch({
    //   name: 'John',
    //   email: 'john@gmail.com'
    // });
    // .deleteById(id);
    // .patch({ id: 69 })
    // .findById(id);
    // .patchAndFetchById(id, {
    //   name: 'bro',
    //   email: 'bro@gmail.com'
    // });

    if (!subject) {
      throw Boom.notFound('Subejct not found');
    }

    return subject; // Return the retrieved employee object
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving subject'); // Handle other errors
  }
}

export function createSubject(subject) {
  return new Subject({
    name: subject.name,
    score: subject.score
  }).save();
}
