var mysql = require('mysql');
var pool  = null;

exports.connect = function() {
  pool = mysql.createPool({
    host     : '127.0.0.1',
    port :3306,
    user     : 'root',
    password : '123456',
    database : 'mydb'
  });
}
 
exports.get = function() {
  return pool;
}
