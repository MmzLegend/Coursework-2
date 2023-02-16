
const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const http = require('http');
const port = process.env.PORT || 3000;

var path = require('path');
var fs = require('fs');
app.use(express.json());

// logger middleware
app.use((req,res, next)=>{
    console.log("Request IP:"+req.url)
    console.log("Request Date"+ new Date())
    next();
})

//error handler
app.use(function(req,res){
    res.status(404).send("File not found")
})

app.listen(port,()=>{
    console.log("App started");
})