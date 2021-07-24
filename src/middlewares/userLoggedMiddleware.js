let user = require('../models/user')

function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false;

    let emailCookie = req.cookies.userEmail;
    let userFromCookie = user.findByField('email', emailCookie);

    if(userFromCookie ) {
        req.session.userLogged = userFromCookie;
    }


    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }


    next()


}

module.exports = userLoggedMiddleware;