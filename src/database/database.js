import knexJs from 'knex';
import { Model } from 'objection';
import knexConfig from './knexfile';

const pg = require('pg');
// implicit data conversion
// https://stackoverflow.com/questions/39168501/pg-promise-returns-integers-as-strings/39176670#39176670
pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value) => parseFloat(value));

/**
 * Database Connection
 */
const knex = knexJs(knexConfig);

Model.knex(knex);

export { knex };

export default Model;