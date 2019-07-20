// dependencies
const mysql = require('mysql');

// the config info the mysql db connection
const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT,
    user: "root",
    password: "",
    database: "burgers_db"
  });

// create the connection, throw errors if encountered.
connection.connect(err => {
    if (err) throw err;
    else console.log("connected as id " + connection.threadId);
});

// exporting the connection for sure in server.js
module.exports = connection;