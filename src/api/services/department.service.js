import Boom from 'boom';
import Department from '../models/department.model';

export async function getAllDepartment() {
  try{
    const department = await Department.query()
    .patch({ dept_id: 20})
    .where('dept_id','<',95);
    return department;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving department');
  }
}

export async function getDepartmentById(id) {
  try {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>id",id);
    const department = Department.query().findById();
    console.log(department)
    if (!department) {
      throw Boom.notFound('Department not found');
    }

    return department; // Return the retrieved employee object
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving department'); // Handle other errors
  }
}

export function createDepartment(department) {
  return new Department({
    name: department.name,
    id: department.id
  }).save();
}
