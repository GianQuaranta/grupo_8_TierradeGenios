const userController = {
    register: function(req,res){
        return res.render('register')
    }
},

const userController = {
    login: function(req,res){
        return res.render('login')
    }
},

const userController = {
    contrasenia: function(req,res){
        return res.render('contrasenia')
    }
}

module.exports = userController;