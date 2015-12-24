var express = require('express');

var app = express();
var port = 3000;
/*
app.get('/', function(req, res){
	res.send('Hello Express');
});
*/

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next){
		console.log(req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
		next();
	}
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication , function(req, res){
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function(){
	console.log('Express server started on port ' + port);
});