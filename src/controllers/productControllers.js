const privileges = require('../models/Privilege');
const db = require('../database/models');


const productController = {
    vistaDeLosProductos: (req,res)=> {
        res.render('productDetail');
    },

    productList: (req,res) =>{  
        const pedidoProducts = db.Product.findAll({
            include: [{association: "category"}]
        });
        const pedidoCategories = db.Category.findAll({
            include: [{association: "privileges"}]
        });

        Promise.all([pedidoProducts, pedidoCategories])
            .then(function([pedidoProducts, pedidoCategories]){
                return res.render ("productList", {products: pedidoProducts, category: pedidoCategories})
          })
    },
    
    create: (req,res) => {
        db.Category.findAll()
            .then(function(categories){
                return res.render("productCreationForm", {categories: categories})   
            })
    },

    saveProduct: (req,res) => {
        db.Product.create({
            name: req.body.name,
            image: req.file != undefined ? req.file.filename : "default.png",
            min: req.body.min,
            max: req.body.max,
            category_id: req.body.category,
            rango: req.body.rango
        });
        res.redirect('/products')           
        
    },

    edit: (req,res) => {
        const pedidoProducts = db.Product.findByPk(req.params.id, {
            include: [{association: "category"}]
        });
        const pedidoCategories = db.Category.findAll({
            include: [{association: "privileges"}]
        });

        Promise.all([pedidoProducts, pedidoCategories])
            .then(function([pedidoProducts, pedidoCategories]){
                return res.render ("productEditingForm", {product: pedidoProducts, categories: pedidoCategories})
          })        
    },

    update: (req,res) => {
        db.Product.update({
            name: req.body.name,
            image: req.file != undefined ? req.file.filename : "default.png",
            min: req.body.min,
            max: req.body.max,
            category_id: req.body.category,
            rango: req.body.rango
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/products/' + req.params.id) 
    },

    detailId: (req,res) => {
        const pedidoProduct = db.Product.findByPk(req.params.id,{
            include: [{association: "category"}]
        });
        const pedidoCategories = db.Category.findAll({
            include: [{association: "privileges"}]
        });

        Promise.all([pedidoProduct, pedidoCategories])
            .then(function([pedidoProduct, pedidoCategories]){
                return res.render ("detailId", {product: pedidoProduct, category: pedidoCategories})
          })
    },

    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/products/");
    },

}

module.exports = productController;