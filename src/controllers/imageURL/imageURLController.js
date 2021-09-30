const db = require('../../database/models')
const path = require('path');

const ImageURLController = {

    imageUser: async (req,res) => {
        
        let id = req.params.id;

        //console.log("id",id);

        let user = await db.User.findByPk(id);

        //console.log("user",user);

        let imageUser = user.avatar;
        //console.log(imageUser);

        return res.sendFile("C:\\Users\\Gian Quaranta\\Documents\\Curso Desarrollo Web Full Stack - Digital House\\PracticoIntegrador\\RepositorioLocalPracticoIntegrador\\clon_grupo_8_tierradegenios\\grupo_8_TierradeGenios\\Public\\img\\users\\"+ imageUser);
        


    },

    imageProduct: async (req,res) => {
        
        let id = req.params.id;

        //console.log("id",id);

        let product = await db.Product.findByPk(id);

        //console.log("product",product);

        let imageProduct = product.image;
        //console.log(imageProduct);

        return res.sendFile("C:\\Users\\Gian Quaranta\\Documents\\Curso Desarrollo Web Full Stack - Digital House\\PracticoIntegrador\\RepositorioLocalPracticoIntegrador\\clon_grupo_8_tierradegenios\\grupo_8_TierradeGenios\\Public\\img\\products\\"+ imageProduct);
        


    }
}
module.exports = ImageURLController;




