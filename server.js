var express = require("express");
var orm = require("./config/orm.js");

orm.updateOne("burgers", "Happy Burger", true, 5);
orm.selectAll("burgers");