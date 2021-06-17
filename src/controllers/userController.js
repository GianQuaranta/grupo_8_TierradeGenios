const userController = {
    register: function(req,res){
        return res.render('register')

    },
    login: function(req,res){
        return res.render('login')
    },
    contrasenia: function(req,res){
        return res.render('contrasenia')
    }

}

module.exports = userController;