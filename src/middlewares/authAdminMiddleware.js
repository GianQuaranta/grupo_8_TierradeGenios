
function authAdminMiddleware(req,res,next) {
    
    let userLogged = req.session != undefined && req.session.userLogged ? req.session.userLogged : null;

    //console.log(userLogged);
    

    /**if(userLogged.isAdmin == 1){
        res.locals.isAdmin = true;
    }**/

    //return (userLogged.isAdmin == 1) ? next() : userLogged != null ? res.redirect('/') : res.redirect('/user/login');

    return (!userLogged) ? res.redirect('/user/login') : (userLogged.isAdmin == 1) ? next() : res.redirect('/');

}

module.exports = authAdminMiddleware;