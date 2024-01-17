import Model from '../../database/database';
import dbConst from '../../database/constants';

 export default class Employee extends Model{
    static get tableName(){
        return dbConst.table_name.TBL_EMPLOYEE;
    }

    get hasTimestamps() {
        return true;
      }
}

module.exports = Employee;