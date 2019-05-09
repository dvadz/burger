var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(result){
        console.log(result);
        res.render("index", {burgers: result});
        // TODO: use handlebars to show result on webpage
    });
});

// TODO: add
// TODO: devour

module.exports = router;