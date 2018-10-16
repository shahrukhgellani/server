//====================== My first Express server =======================\\


var express = require('express')
var app = express()
var port = 3213
app.get('/about',function(req , res){

	res.send('I am from server!')
})

 //=========================Middleware =====================================\\

var middleware = require('./middleware/middleware')

app.use(middleware.requireAuthentication)
app.get('/about-us', middleware.requestTime, function(req , res){

	res.send('I am from about-us route!')
})

app.get('/home',function(req , res){

	res.send('I am from home!')
})
app.use(express.static(__dirname + "/public"))

app.listen(port ,function(){

	console.log("Working with index on port " + port)
})