/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.up = function(knex) {
  return knex.schema.createTable(dbConst.table_name.TBL_USER, table => {
    table.increments();
    table.string(dbConst.user_column.NAME).notNull();
    table.string(dbConst.user_column.ADDRESS).notNull();
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
  return knex.schema.dropTable(dbConst.table_name.TBL_USER);
};
