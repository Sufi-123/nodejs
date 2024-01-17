/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.up = function(knex) {
  return knex.schema.createTable(dbConst.table_name.TBL_EMPLOYEE, table => {
    table.increments();
    table.string(dbConst.employee_column.NAME).notNull();
    table.string(dbConst.employee_column.EMAIL).notNull();
    table
      .timestamp(dbConst.default_column.CREATED_AT)
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp(dbConst.default_column.UPDATED_AT).nullable();
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(dbConst.table_name.TBL_EMPLOYEE);
};
