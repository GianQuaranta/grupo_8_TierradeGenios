const db = require('../../database/models')
const path = require('path');

const apiUserController = {
    list: async(req, res) => {
        try {

            let user = await db.User.findAll();

            let usersNew = user.map(function(us) {
                return {
                    id: us.id,
                    name: us.firstName,
                    email: us.email,
                    detail: 'http://localhost:3050/api/users/' + us.id
                }
            })

            //console.log("userNew", usersNew);

            //console.log("usersLength", usersNew.length);

            return res.status(200).json({
                count: usersNew.length,
                users: usersNew
            })

        } catch (e) {
            res.send(e)
        }
    },

    detail: async(req, res) => {

        try {

            let id = req.params.id;

            let user = await db.User.findByPk(id, {
                include: [{ association: "MedioDePago" }],
                attributes: {
                    exclude: ['password', 'isAdmin']
                }
            });

            //console.log(user);

            //return res.send(user);

            return res.status(200).json({
                user: user,
                image_perfil: 'http://localhost:3050/image/user/' + id
            })

        } catch (e) {
            res.send(e);
        }

    },

    detailList: async(req, res) => {
        try {

            let userQuery = await db.User.findAll({
                include: [{ association: "MedioDePago" }],
                attributes: {
                    exclude: ['password', 'isAdmin']
                }
            });

            //console.log("userQuery", userQuery);

            const newUsers = userQuery.map(u => {
                return {
                    id: u.id,
                    firstName: u.firstName,
                    lastName: u.lastName,
                    email: u.email,
                    birthDate: u.birthDate,
                    adress: u.adress,
                    phoneNumber: u.phoneNumber,
                    country: u.country,
                    avatar: u.avatar,
                    medioDePago: u.MedioDePago,
                    imgPerfil: `http://localhost:3050/image/user/${u.id}`

                }
            })




            console.log("newUsers", newUsers)
            return res.send(newUsers);
            return res.status(200).json({ newUsers })

        } catch (e) {
            res.send(e)
        }
    }

}

module.exports = apiUserController;