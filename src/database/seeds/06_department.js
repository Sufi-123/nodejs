/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.seed = async function(knex) {

  await knex.raw('TRUNCATE TABLE "department" CASCADE');
  // Deletes all existing entries
  return knex(dbConst.table_name.TBL_DEPARTMENT)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(dbConst.table_name.TBL_DEPARTMENT).insert([
          {
            name: 'srivalli',
            dept_id: 80
            
          },
          {
            name: 'ram',
            dept_id: 90
          },
          {
            name: 'shyam',
            dept_id: 85
          },
        
          {
            name: 'sufi',
            dept_id: 95
          }
        ])
      
    });
};
