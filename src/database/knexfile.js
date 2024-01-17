require('babel-register');
require('dotenv').config({ path: __dirname + '/../../.env' });

module.exports = {
    client: 'pg',
  connection: {
    user: 'postgres',
    password: 'finalproject',
    database: 'nodejs-sample',
   
  },
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
    stub: './stubs/migration.stub'
  },
  seeds: {
    directory: './seeds',
    stub: './stubs/seed.stub'
  },
};
