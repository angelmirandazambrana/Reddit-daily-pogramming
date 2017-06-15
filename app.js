var express=require('express');
var app=express();
var routes=require('./routes');
var errorHandlers=require('./middleware/errorhandlers');

app.set('port', process.env.PORT || 3000);

app.get('/', routes.index);
app.use(errorHandlers.notFound);

app.listen(app.get('port'));
console.log("App server running on port " + app.get('port'));
