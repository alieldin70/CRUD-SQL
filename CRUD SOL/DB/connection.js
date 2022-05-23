const mysql2 = require('mysql2');
const sql = mysql2.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: '',
    database: 'users'
})
module.exports = sql;