const fs=require('fs');
module.exports.index=index;
module.exports.e1=e1;
module.exports.e2=e2;
module.exports.processDataE1=processDataE1;

function index(req, res) {
    res.render('index', {'title':'Index'});
};

function e1(req, res){
    fs.readFile('./data/e1data.json', function read(err, data) {
        if (err) {
            throw err;
        }
        var userData=JSON.parse(data);
    res.render('e1', {
        'title':'Exercise 1',
        'data': userData
    });
});
};

function e2 (req, res){
    res.render('e2', {
        'title':'Exercise 2'
    });
};

function processDataE1(req, res){
    fs.readFile('./data/e1data.json', function read(err, data) {
        if (err) {
            throw err;
        }
        var userData=JSON.parse(data);
        userData.push({
            'firstName': req.body.firstName,
            'age': req.body.age,
            'userName': req.body.userName
        });
        fs.writeFile('./data/e1data.json', JSON.stringify(userData), function (err) {
            if (err) {
                throw err;
            }
        })
        res.redirect('/E1');
    })
}