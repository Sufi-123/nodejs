import Model from '../../database/database';

import dbConst from '../../database/constants';

export default class Book extends Model {
  static get tableName() {
    return dbConst.table_name.TBL_BOOKS;
  }

  get hasTimestamps() {
    return true;
  }
}
module.exports = Book;