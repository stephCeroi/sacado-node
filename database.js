const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'sacado',
  password: 'root',
  port: 5432,
})