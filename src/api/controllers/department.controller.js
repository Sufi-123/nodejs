
import { departmentService } from '../services';

export const getAllDepartment = async (req, res, next) => {
  try {
    const department = await departmentService.getAllDepartment(); // Call the service function
    res.json(department); // Send all employees as a JSON response
  } catch (error) {
    console.error(error);
    // Handle errors appropriately (e.g., send a 500 status code)
  }
};

export const  getDepartmentById = async(req, res, next) => {
    try {
      const departmentId = req.params.id; // Replace with the actual ID
      const department = await departmentService.getDepartmentById(departmentId);
        
      // Use the retrieved employee object here
      // console.log(employee.id); // Example usage
      return res.json(department);
    } catch (error) {
      console.error(error);
      
    }
  }