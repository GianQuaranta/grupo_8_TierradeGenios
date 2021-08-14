const privileges = require('../models/Privilege');
const modelProducts = require('../models/Product');



const productController = {
    vistaDeLosProductos: (req,res)=> {
        res.render('productDetail');
    },

    productList: (req,res) =>{  
        //return res.send(db.Product.findAll()) 
        res.render('productList', { products:modelProducts.all()})  
    },
    create: (req,res) => {
        res.render("productCreationForm")
    },
    saveProduct: (req,res) => {
        let result = modelProducts.create(req.body,req.file)
        res.redirect('/products')
       // return result == true ? res.redirect('/products'):*/res.send('Error al cargar la informacion')
        
    },
    edit: (req,res) => {
        //res.send(modelProducts.one(req.params.id));
        res.render("productEditingForm", {product: modelProducts.one(req.params.id)});
        
    },
    update: (req,res) => {
        let result = modelProducts.edit(req.body,req.file,req.params.id)
		return result == true ? res.redirect("/products/") : res.send("Error al cargar la información");
    },
    detailId: (req,res) => {
        //res.send(modelProducts.addAll())
        //res.send(modelProducts.one(req.params.id))
        res.render("detailId", {product: modelProducts.one(req.params.id)})
    },

    delete: (req, res) => {
        let result = modelProducts.delete(req.params.id);
        return result == true ? res.redirect("/products/") : res.send("Error al cargar la información")
    },

}

module.exports = productController;