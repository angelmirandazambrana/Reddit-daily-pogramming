module.exports.csrf=csrf;
module.exports.authenticated=authenticated;
module.exports.requireAuthentication=requireAuthentication;
module.exports.logout=logout;



function csrf(req, res, next) {
    res.locals.token=req.csrfToken();
    next();
}

function authenticated(req, res, next){
    res.locals.isAuthenticated=req.session.isAuthenticated;
    if(req.session.isAuthenticated){
        res.locals.user=req.session.userName;
    }
    next();
}

function requireAuthentication(req, res, next){
    if (req.session.isAuthenticated){
        next();
    } else {
        res.redirect('/login');
    }

}

function logout (session) {
    session.isAuthenticated=false;
    delete session.userName;
};