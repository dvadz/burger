var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??",[tableName], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, burgerName, devoured, cb) {
        connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)",
        [tableName, burgerName, devoured], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, burgerName, devoured, id, cb) {
        TODO:connection.query("UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ?",
        [tableName, burgerName, devoured, id], function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;