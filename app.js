var express=require('express');
var app=express();
var http=require('http');
var routes=require('./routes');
var errorHandlers=require('./middleware/errorhandlers');
var ejs=require('ejs');
var partials=require('express-partials');
var bodyParser=require('body-parser');
var reload=require('reload');
var cookieParser=require('cookie-parser');
var expressSession=require('express-session');
var redisStore=require('connect-redis')(expressSession);
var server=http.createServer(app);
var csrf=require('csurf');
var util=require('./middleware/utilities');
var flash=require('connect-flash');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'EJS');
app.set('views', './views');
app.use(express.static(__dirname+'/static'));
app.use(cookieParser('This is my secret'));
app.use(expressSession({
    secret:'This is my secret',
    saveUninitialized:true,
    resave: true,
    store: new redisStore({
        url:'redis://localhost',
        port: 6379
    })
}));
app.use(partials());
app.set('view options',{defaulLayout:'layout'});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(csrf());
app.use(util.csrf);
app.use(util.authenticated);
app.use(flash());
reload(server, app);

app.get('/', routes.index);
app.get('/e1', routes.e1);
app.get('/e2', routes.e2);
app.get('/login', routes.login);
app.get('/logout', routes.logout);
app.post('/processDataE1', routes.processDataE1);
app.post('/loginprocess', routes.loginProcess);
app.use(errorHandlers.notFound);





server.listen(app.get('port'), function(){
    console.log("App server running on port " + app.get('port'));
});

