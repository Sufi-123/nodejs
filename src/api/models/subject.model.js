import Model from '../../database/database';
import dbConst from '../../database/constants';

 export default class Subject extends Model{
    static get tableName(){
        return dbConst.table_name.TBL_SUBJECT;
    }

    get hasTimestamps() {
        return true;
      }
}

module.exports = Subject;