
import { authorService } from '../services';

export const getAllAuthors = async (req, res, next)=>{
  try{
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch(error){
    console.error(error);
  }
};

export const  getAuthorsById = async(req, res, next) => {
    try {
      const authorsId = req.params.id; // Replace with the actual ID
      const authors = await authorService.getAuthorsById(authorsId);
        
      // Use the retrieved employee object here
      // console.log(employee.id); // Example usage
      return res.json(authors);
    } catch (error) {
      console.error(error);
      
    }
  }