var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./server/app/routes.js');
var app = express();

var	publicPath = path.resolve(__dirname, "./client");
app.use(express.static(publicPath));
app.use(bodyParser());
app.use("/api",	api);
app.get("/",function(req,res){
   	res.send("index");
});

app.listen(4000,function(){
    console.log("server is listening on port 4000");
});
var uri = "mongodb://admin:admin123@ds011288.mongolab.com:11288/salesman";
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };
mongoose.connect(uri,options);
var conn = mongoose.connection;             
conn.on('error', console.error.bind(console, 'connection error:'));  
conn.once('open', function() {
  console.log("database connected!")                         
});

