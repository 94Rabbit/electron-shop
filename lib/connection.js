const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rootroot',
    database:'electronshop'
});
module.exports = db;
