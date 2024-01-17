/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.up = function(knex) {
  return knex.schema.createTable(dbConst.table_name.TBL_DEPARTMENT, table => {
    table.increments();
    table.string(dbConst.department_column.NAME).notNull();
    table.integer(dbConst.department_column.DEPT_ID).notNull();
    table
      .timestamp(dbConst.default_column.CREATED_AT)
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp(dbConst.default_column.UPDATED_AT)
    .notNull()
      .defaultTo(knex.raw('now()'));
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(dbConst.table_name.TBL_DEPARTMENT);
};
