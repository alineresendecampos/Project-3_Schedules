// Create a connection to the database
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "36abbeyfield",
  database: "Project3",
});

connection.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Connected...");
});

module.exports = connection;
