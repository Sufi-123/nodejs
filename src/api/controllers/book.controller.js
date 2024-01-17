
import { bookService } from '../services';

export const getAllBooks = async (req, res, next)=>{
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
    } catch(error){
      console.error(error);

    }
  };


export const  getBooksById = async(req, res, next) => {
    try {
      const booksId = req.params.id; // Replace with the actual ID
      const books = await bookService.getBooksById(booksId);
        
      // Use the retrieved employee object here
      // console.log(employee.id); // Example usage
      return res.json(books);
    } catch (error) {
      console.error(error);
      
    }
  }