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
        return res.render('userList', {userList: user.all()}
        //res.send(user.all());
        )}

}

module.exports = userController;