
import { employeeService } from '../services';

export const getAllEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.getAllEmployee(); // Call the service function
    res.json(employee); // Send all employees as a JSON response
  } catch (error) {
    console.error(error);
    // Handle errors appropriately (e.g., send a 500 status code)
  }
};

export const  getEmployeeById = async(req, res, next) => {
    try {
      const employeeId = req.params.id; // Replace with the actual ID
      const employee = await employeeService.getEmployeeById(employeeId);
        
      // Use the retrieved employee object here
      // console.log(employee.id); // Example usage
      return res.json(employee);
    } catch (error) {
      console.error(error);
      
    }
  }