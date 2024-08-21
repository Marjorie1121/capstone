const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",//process.env.DB_NAME,
  password: null,//process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
