// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  logging: true,

  entities: ['./src/app/model/*.ts'],
  migrations: ['./src/database/migration/*.ts'],

  cli: {
    migrationsDir: './src/database/migration'
  }
};
