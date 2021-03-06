var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
/*
app.get('/', function(req, res){
	res.send('Hello Express');
});
*/

var middleware = require('./middleware.js');
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication , function(req, res){
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function(){
	console.log('Express server started on port ' + port);
});