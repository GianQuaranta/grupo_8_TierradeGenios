const user = require('../models/user')
const userController = {
    register: function(req,res){
        return res.render('register')

    },
    login: function(req,res){
        return res.render('login')
    },
    contrasenia: function(req,res){
        return res.render('contrasenia')
    },

    create: function(req, res){
        return res.send('Ok, viniste por POST')
    },

    userList: function(req,res){
        return res.render('userList', {userList: user.all()}
        //res.send(user.all());
        )}

}

module.exports = userController;