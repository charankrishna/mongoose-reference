var express = require("express");
var bodyparser = require("body-parser");

var User = require("./models/User");
var Post = require("./models/Post");
var dbconfig = require("./models/dbconfig");

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.post('/',function(req,res){
    console.log(req.body);
    var user = new User();
    user.name = req.body.name;

    user.save(function(err){
        if(err){
            throw err;
        }
        res.json({"Status":"Success"})
    })
});

