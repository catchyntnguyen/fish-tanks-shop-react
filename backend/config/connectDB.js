  const mysql = require('mysql2/promise');
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'fishtanks',
    // password: 'password'
  })
  module.exports = pool;