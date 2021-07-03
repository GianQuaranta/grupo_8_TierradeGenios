const descriptions = require('../models/description');
const modelProducts = require('../models/product');


const productController = {
    vistaDeLosProductos: (req,res)=> {
        res.render('productDetail')
    },

    productList: (req,res) =>{
       //return res.send({productos:modelProducts.addAll()})
       res.render('productList' , { products:modelProducts.addAll()} )   
       
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