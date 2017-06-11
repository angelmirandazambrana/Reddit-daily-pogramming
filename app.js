var express=require('express');
var app=express();
var routes=require('./routes');

app.set('port', process.env.PORT || 3000);

app.get('/', routes.index);

app.listen(app.get('port'));
console.log("App server running on port " + app.get('port'));
