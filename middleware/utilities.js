var config=require('../config');

module.exports.csrf=csrf;
module.exports.authenticated=authenticated;
module.exports.requireAuthentication=requireAuthentication;
module.exports.logout=logout;
module.exports.templateRoutes=templateRoutes;


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
        res.redirect(config.routes.login);
    }

}

function logout (session) {
    session.isAuthenticated=false;
    delete session.userName;
};

function templateRoutes(req, res, next){
    res.locals.routes=config.routes;
    next();
}