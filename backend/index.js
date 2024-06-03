var fs = require('fs');
var express = require('express');
var app = express();
const db = require('./db');

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/page/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
 
app.post('/hello', function(req, res){
    res.send("2 You just called the post method at '/hello'!\n");
});

app.listen(3200);