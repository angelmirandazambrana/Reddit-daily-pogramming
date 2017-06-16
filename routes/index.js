module.exports.index=index;
module.exports.e1=e1;

function index(req, res) {
    res.render('index', {'title':'Index'});
};

function e1(req, res){
    res.render('e1', {'title':'Exercise 1'});
}