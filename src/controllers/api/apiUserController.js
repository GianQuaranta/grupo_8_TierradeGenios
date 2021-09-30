const db = require('../../database/models')
const path = require('path');

const apiUserController = { 
    list: async (req, res) => {
        try {

            let user = await db.User.findAll();

            let usersNew = user.map(function (us) {
                return {
                    id: us.id,
                    name: us.firstName,
                    email: us.email,
                    detail: 'http://localhost:3001/api/users/' + us.id
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

    detail: async (req, res) => {

        try{

            let id = req.params.id;

            let user = await db.User.findByPk(id, {include: [{ association: "MedioDePago" }],
                attributes: { 
                    exclude: ['password', 'isAdmin']
                }
            });

            //console.log(user);

            //return res.send(user);

            return res.status(200).json({
                user:user, 
                image_perfil:'http://localhost:3001/image/user/' + id   
                
                /**("C:\\Users\\Gian Quaranta\\Documents\\Curso Desarrollo Web Full Stack - Digital House\\PracticoIntegrador\\RepositorioLocalPracticoIntegrador\\clon_grupo_8_tierradegenios\\grupo_8_TierradeGenios\\backend\\Public\\img\\users\\" + user.avatar)**/
            })

        } catch (e) {
            res.send(e);
        }

    }

}

module.exports = apiUserController;