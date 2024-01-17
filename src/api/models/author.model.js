const {Model} = require ('objection');

import dbConst from '../../database/constants';

class Author extends Model {
  static get tableName() {
    return dbConst.table_name.TBL_AUTHORS;
  }

  get hasTimestamps() {
    return true;
  }
}

module.exports = Author;
