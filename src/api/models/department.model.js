import Model from '../../database/database';

import dbConst from '../../database/constants';

export default class Department extends Model {
  static get tableName() {
    return dbConst.table_name.TBL_DEPARTMENT;
  }

  get hasTimestamps() {
    return true;
  }
}
module.exports = Department;