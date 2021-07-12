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

    userList: function(req,res){
        return res.render('userList', {userList: user.all()}
        //res.send(user.all());
        )}

}

module.exports = userController;