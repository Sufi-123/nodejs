import Boom from 'boom';
import Employee from '../models/employee.model';

export async function getAllEmployee() {
  try{
    const employee = await Employee.query()
    .findOne({ name: 'Heyyy'});
    // .where('id', '>', 65)
    // .orderBy('name');
    // .insert({
    //   name: 'Hello World',
    //   email: 'hello@gmail.com'
    // });

    
    return employee;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving employee');
  }
}

export async function getEmployeeById(id) {
  try {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>id",id);
    const employee =   Employee.query()
    
    .findById(id);
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

    if (!employee) {
      throw Boom.notFound('Employee not found');
    }

    return employee; // Return the retrieved employee object
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving employee'); // Handle other errors
  }
}

export function createEmployee(employee) {
  return new Employee({
    name: employee.name,
    id: employee.id
  }).save();
}
