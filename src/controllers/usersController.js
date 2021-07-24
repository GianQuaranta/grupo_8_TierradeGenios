const user = require('../models/user')
const bcrypt = require("bcryptjs")
const userController = {
    register: function(req,res){
        //return res.send(user.findAll())
        
        return res.render('register')

    },
    login: function(req,res){
        return res.render('login')
    },
    contrasenia: function(req,res){
        return res.render('contrasenia')
    },

    create: function(req, res){
        const userToCreate = {
            ...req.body,
            avatar: req.file.filename,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        user.create(userToCreate)

        return res.send("Ok, se guardó el usuario")
        
    },

    userList: function(req,res){
        return res.render('userList', {userList: user.findAll()}
        
        )},

        loginProcess: function(req,res) {
     
        let userLogin = user.findByField('email', req.body.email);
            console.log(userLogin)
        if(userLogin) {
            let correctPassword = bcrypt.compareSync(req.body.password , userLogin.password);
            if(correctPassword){
                delete userLogin.password;
                req.session.userLogged = userLogin

                if(req.body.remember){
                    res.cookie('userEmail', req.body.email, {maxAge: 1000 * 10})
                }
                return res.redirect('/user/profile')
            }
            
        }
        return res.render('login')
    },

    profile: function(req,res) {
        return res.render('profileUser', {user: req.session.userLogged})
    },

    logout: function(req,res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }


}

module.exports = userController;