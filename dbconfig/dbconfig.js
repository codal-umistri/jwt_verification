var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "User",
  port: 3306,
});

module.exports = {
  connection,
};
