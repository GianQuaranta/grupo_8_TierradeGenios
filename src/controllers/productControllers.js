const modelProducts = require('../models/modelProducts');


const productController = {
    vistaDeLosProductos: (req,res)=> {
        res.render('productDetail')
    },

    productList: (req,res) =>{
        
        res.render('productList' , {product:modelProducts.all() , description:modelProducts.description()} )
    },
    create: (req,res) => {
        res.render("productCreationForm")
    },
    saveProduct: (req,res) => {
        //Falta la lógica
        res.send("Falta la lógica")
    },
    edit: (req,res) => {
        res.render("productEditingForm")
    },
    update: (req,res) => {
        //Falta la lógica
        res.send("Falta la lógica")
    }

}

module.exports = productController;