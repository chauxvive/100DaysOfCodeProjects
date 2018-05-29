'use strict';

var express = require("express");
var app = express();
var routes = require("./routes");


var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());


var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(){
    console.log("There were problems", err);
});

db.once("open", function(){
    console.log("looks like db connection works bro");
});

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
        return res.status(200).json({});
    }
    next();
});


app.use("/questions", routes);

// catch 404 errors
app.use(function(req, res, next){
    var err = new Error("Page Not Found");
    err.status = 404;
    next(err);
});

//Error handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express server listening on port", port);
});





