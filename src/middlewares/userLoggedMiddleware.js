const db = require ('../database/models')

module.exports = async function userLoggedMiddleware(req,res,next){
    
    try{
    
        res.locals.isLogged = false;

        let emailCookie = req.cookies.userEmail;

        let userFromCookie;

        if(emailCookie){
            userFromCookie = await db.User.findOne({
                where: {
                    email: emailCookie
                }
            })
        }

        if(userFromCookie) {
            req.session.userLogged = userFromCookie;
        }
        
        console.log(userFromCookie)

        if(req.session && req.session.userLogged){
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }

        
        
        next()

        
    } catch (e) { res.send("soy el catch") };

    

}
