const user = require('../models/user')
const bcrypt = require("bcryptjs")
const db = require('../database/models')
const userController = {
    register: async function (req, res) {
        let mediosDePago = await db.MedioDePago.findAll()
        return res.render('register', { mediosDePago: mediosDePago })

    },
    login: function (req, res) {
        return res.render('login')
    },
    contrasenia: function (req, res) {
        return res.render('contrasenia')
    },

    create: async function (req, res) {
        const userInDB = await db.User.findOne({
            where: {
                email: req.body.email,
            }
        });

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
                        dateBirth: {
                            msg: 'Seleccione nuevamente la fecha de nacimiento'
                        }
                    },
                    old: req.body

                })
        }

        const userToCreate = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthDate: req.body.birthDate,
            adress: req.body.adress,
            phoneNumber: req.body.phoneNumber,
            country: req.body.country,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            isAdmin: 0
        }

        let usuarioCreado = await db.User.create(userToCreate);

        let numberArray = req.body.medio_de_pago.map(m => parseInt(m))
        console.log(numberArray);

        let agregarMdp = await numberArray.forEach(mdp => {
            db.UserMediosDePago.create({
                user_id: usuarioCreado.id,
                medio_de_pago_id: mdp
            })
        });
        return res.redirect("/user/login")

    },

    userList: async function (req, res) {


        let usuarios = await db.User.findAll({
            include: [{ association: "MedioDePago" }]
        })

            .catch(function (err) {
                console.log("Error!")
            })

        // return res.send(usuarios)
        return res.render('userList', { userList: usuarios })



    },

    loginProcess: async function (req, res) {

        let userLogin = await db.User.findOne({
            where: {
                email: req.body.email,
            }
        })

        if (userLogin) {
            let correctPassword = bcrypt.compareSync(req.body.password, userLogin.password);
            if (correctPassword) {
                delete userLogin.password;
                req.session.userLogged = userLogin

                if (req.body.remember) {
                    res.cookie('userEmail', req.body.email, { maxAge: 1000 * 10 })
                }

                if (userLogin.isAdmin == 1) {
                    res.locals.isAdmin = true;
                }

                console.log(res.locals.isAdmin);

                return res.redirect('/user/profile')
            } else {
                return res.render('login', {
                    errors: {
                        email: { msg: 'Credenciales invalidas' }
                    },
                    old: req.body
                })
            }

        }
        return res.render('login', {
            errors: {
                email: { msg: 'No se encuentra este email en nuestra base de datos' }
            }
        })
    },

    profile: function (req, res) {
        return res.render('profileUser', { user: req.session.userLogged })
    },

    logout: function (req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    edit: async function (req, res) {

        const pedidoUser = await db.User.findByPk(req.params.id, {
            include: [{ association: "MedioDePago" }]
        });

        let mediosDePago = await db.MedioDePago.findAll();

        //res.send(pedidoUser)
        //res.send(mediosDePago)

        return res.render("userEditingForm", { user: pedidoUser, old: req.body, mediosDePago: mediosDePago })


    },

    update: async function (req, res) {
        try {
            let usuarioEditar = await db.User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                birthDate: req.body.birthDate,
                adress: req.body.adress,
                phoneNumber: req.body.phoneNumber,
                country: req.body.country,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename,
                isAdmin: 0
            }, {
                where: { id: req.params.id }
            })

            console.log(usuarioEditar)

            let numberArray = req.body.medio_de_pago.map(m => parseInt(m))
            console.log(numberArray);

            let actualizarMdp =  numberArray.map(async(mdp) => {
                return await db.UserMediosDePago.update({
                    user_id: usuarioEditar.id,
                    medio_de_pago_id: mdp
                }, {
                    where: {
                        user_id: usuarioEditar.id
                    }
                })
            })

            console.log(actualizarMdp);

            res.redirect('/user/list')
        }
        catch (e) { res.send(e) }
    },




    deleteUser: async function (req, res) {
        try {

            let usuarioPorBorrar = await db.User.destroy({
                where: {
                    id: req.params.id
                }
            })

            let mediosDePagoDelUsuarioABorrar = await db.UserMediosDePago.destroy({
                where: {
                    user_id: req.params.id
                }
            })

            res.redirect("/user/list");

        }

        catch (e) { res.send(e) }

        //return res.send(usuarios)


    }



}



module.exports = userController;