/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.seed = async function(knex) {

  await knex.raw('TRUNCATE TABLE "subject" CASCADE');
  // Deletes all existing entries
  return knex(dbConst.table_name.TBL_SUBJECT)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(dbConst.table_name.TBL_SUBJECT).insert([
          {
            name: 'srivalli',
            score: 80
            
          },
          {
            name: 'ram',
            score: 90
          },
          {
            name: 'shyam',
            score: 85
          },
        
          {
            name: 'sufi',
            score: 95
          }
        ])
      
    });
};
