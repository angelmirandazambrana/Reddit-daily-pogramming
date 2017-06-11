var express=require('express');
var app=express();

app.set('port', process.env.PORT || 3000);

app.get('*', function(req, res){
    res.send('Express response');
});

app.listen(app.get('port'));
console.log("App server running on port "+app.get('port'));
