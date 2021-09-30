const db = require('../../database/models')
const path = require('path');

const imageUserController = {

    imageShow: async (req,res) => {
        
        let id = req.params.id;

        //console.log("id",id);

        let user = await db.User.findByPk(id);

        //console.log("user",user);

        let imageUser = user.avatar;
        //console.log(imageUser);

        return res.sendFile("C:\\Users\\Gian Quaranta\\Documents\\Curso Desarrollo Web Full Stack - Digital House\\PracticoIntegrador\\RepositorioLocalPracticoIntegrador\\clon_grupo_8_tierradegenios\\grupo_8_TierradeGenios\\Public\\img\\users\\"+ imageUser);
        


    }
}
module.exports = imageUserController;




