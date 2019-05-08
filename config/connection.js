var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log("Error connecting to database");
        console.log(err.stack);
        return;
    }

    console.log(`Connected to the database as id ${connection.threadId}`);
});

module.exports = connection;