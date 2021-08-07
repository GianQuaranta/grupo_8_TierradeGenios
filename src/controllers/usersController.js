const user = require('../models/user')
const userAdmin = require('../models/admin')
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
        const userInDB = user.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('register', 
            {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    },
                    avatar: {
                        msg: 'Seleccione nuevamente la imagen de perfil'
                    },
                    fecha: {
                        msg: 'Seleccione nuevamente la fecha de nacimiento'
                    }
                },
                old: req.body
            
        })
        }


        const userToCreate = {
            ...req.body,
            avatar: req.file.filename,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        user.create(userToCreate)

        return res.redirect("/user/login")
        
    },

    userList: function(req,res){
        return res.render('userList', {userList: user.findAll()}
        
        )},

    loginProcess: function(req,res) {
    
    let userLogin = user.findByField('email', req.body.email);
    if(userLogin) {
        let correctPassword = bcrypt.compareSync(req.body.password , userLogin.password);
        if(correctPassword){
            delete userLogin.password;
            req.session.userLogged = userLogin

            if(req.body.remember){
                res.cookie('userEmail', req.body.email, {maxAge: 1000 * 10})
            }   

            
            let allAdmins = userAdmin.findAll();
            let isAdmin = allAdmins.find(admin => admin.email == req.body.email);

            console.log(isAdmin, "prueba admin");
        
            if(isAdmin){
                res.locals.isAdmin = true;
            }

            console.log(res.locals.isAdmin);

            return res.redirect('/user/profile')
        } else {
            return res.render('login', {
                errors: {
                    email: {msg: 'Credenciales invalidas'}
                },
                old: req.body
            })
        }
        
    }
    return res.render('login', {
        errors: {
            email: {msg: 'No se encuentra este email en nuestra base de datos'}
        }
    })
},

    profile: function(req,res) {
        return res.render('profileUser', {user: req.session.userLogged})
    },

    logout: function(req,res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }


}

module.exports = userController;