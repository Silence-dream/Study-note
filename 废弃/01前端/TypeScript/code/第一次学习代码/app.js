"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.get("/", function (req, res) {
    res.send("hellop");
});
app.listen(port, function () {
    console.log("http://localhost:3000");
});
