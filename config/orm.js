var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName) {
        connection.query("SELECT * FROM ??",[tableName], function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableName, burgerName, devoured) {
        connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)",
        [tableName, burgerName, devoured], function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableName, burgerName, devoured, id) {
        TODO:connection.query("UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ?",
        [tableName, burgerName, devoured, id], function(err, result){
            if(err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;