var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(result){
        console.log(result);
        res.render("index", {burgers: result});
    });
});

// add new burger
router.post("/api/new", function(req, res){
    burger.add(req.body.burgerName, function(result){
        console.log(result);
        res.redirect("/");
    });
});

// eat the burger TODO: use proper type
router.post("/api/eat", function(req, res){
    console.log("/api/eat");
    console.log(req.body);

    // TODO: devour it
    burger.devour(req.body.burger_name, req.body.id, function(result){
        res.redirect("/");
    });
});

module.exports = router;