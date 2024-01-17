
import { subjectService } from '../services';

export const getAllSubject = async (req, res, next) => {
  try {
    const subject = await subjectService.getAllSubject(); // Call the service function
    res.json(subject); // Send all employees as a JSON response
  } catch (error) {
    console.error(error);
    // Handle errors appropriately (e.g., send a 500 status code)
  }
};

export const  getSubjectById = async(req, res, next) => {
    try {
      const subjectScore = req.params.score; // Replace with the actual ID
      const subject = await subjectService.getSubjectById(subjectScore);
        
      // Use the retrieved employee object here
      // console.log(employee.id); // Example usage
      return res.json(subject);
    } catch (error) {
      console.error(error);
      
    }
  }