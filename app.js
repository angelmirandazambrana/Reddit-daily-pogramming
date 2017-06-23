var express=require('express');
var app=express();
var http=require('http');
var routes=require('./routes');
var errorHandlers=require('./middleware/errorhandlers');
var ejs=require('ejs');
var partials=require('express-partials');
var bodyParser=require('body-parser');
var reload=require('reload');
var server=http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'EJS');
app.set('views', './views');
app.use(express.static(__dirname+'/static'));
app.use(partials());
app.set('view options',{defaulLayout:'layout'});
app.use(bodyParser.urlencoded({ extended: false }))

reload(server, app);

app.get('/', routes.index);
app.get('/e1', routes.e1);
app.get('/e2', routes.e2);
app.post('/processDataE1', routes.processDataE1);
app.use(errorHandlers.notFound);





server.listen(app.get('port'), function(){
    console.log("App server running on port " + app.get('port'));
});

