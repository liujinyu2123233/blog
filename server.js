var http = require('http');
var app = require('./app');


http.createServer(app).listen("8080",function(){
    console.log('server is working,listen 8080')
})