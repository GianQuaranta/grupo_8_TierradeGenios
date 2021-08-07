const user = require('../models/user')
const admin = require('../models/admin')

function authAdminMiddleware(req,res,next) {
    
    let userLogged = req.session != undefined && req.session.userLogged ? req.session.userLogged : null;
    let allAdmins = admin.findAll();

    let isAdmin = userLogged != null ? allAdmins.find(admin => admin.email == userLogged.email) : null;

    console.log(isAdmin);

    if(isAdmin){
        res.locals.isAdmin = true;
    }

    return isAdmin ? next() : userLogged != null ? res.redirect('/') : res.redirect('/user/login');


}

module.exports = authAdminMiddleware;