const descriptions = require('../models/description');
const modelProducts = require('../models/product');


const productController = {
    vistaDeLosProductos: (req,res)=> {
        res.render('productDetail')
    },

    productList: (req,res) =>{
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
    },
    detailId: (req,res) => {
        //res.send(modelProducts.one(req.params.id))
        res.render("detailId", {product: modelProducts.one(req.params.id)})
    }

}

module.exports = productController;