var orm = require("../config/orm.js");

// TODO: * Also inside `burger.js`, 
// create the code that will call the 
// ORM functions using burger specific input for the ORM.


var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    add: function(burgerName, cb){
        orm.insertOne("burgers",burgerName, false, function(res){
            cb(res);
        });
    },
    devour: function(burgerName, id, cb){
        orm.updateOne("burgers", burgerName, true, id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;