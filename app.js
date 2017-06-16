var express=require('express');
var app=express();
var routes=require('./routes');
var errorHandlers=require('./middleware/errorhandlers');
var ejs=require('ejs');
var partials=require('express-partials');
 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'EJS');
app.set('views', './views');
app.use(express.static(__dirname+'/static'));
app.use(partials());
app.set('view options',{defaulLayout:'layout'});

app.get('/', routes.index);
app.get('/E1', routes.e1);
app.use(errorHandlers.notFound);

app.listen(app.get('port'));
console.log("App server running on port " + app.get('port'));
