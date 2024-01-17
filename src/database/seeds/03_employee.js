/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.seed = async function(knex) {

  await knex.raw('TRUNCATE TABLE "employee" CASCADE');
  // Deletes all existing entries
  return knex(dbConst.table_name.TBL_EMPLOYEE)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(dbConst.table_name.TBL_EMPLOYEE).insert([
          {
            name: 'sana',
            email: 'sana@gmail.com'
            
          },
          {
            name: 'ram',
            email: 'ram@gmail.com'
          },
          {
            name: 'shyam',
            email: 'shyam@gmail.com'
          },
        
          {
            name: 'hari',
            email: 'hari@gmail.com'
          }
        ])
      
    });
};
