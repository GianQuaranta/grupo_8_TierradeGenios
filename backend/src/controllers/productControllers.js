const privileges = require('../models/Privilege');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const productController = {

    vistaDeLosProductos: (req, res) => {
        res.render('productDetail');
    },

    productList: async (req, res) => {

        try {
            const pedidoProducts = await db.Product.findAll({
                include: [{ association: "category" }]
            });
            const pedidoCategories = await db.Category.findAll({
                include: [{ association: "privileges" }]
            });

            //return res.send(pedidoCategories)

            return res.render("productList", { products: pedidoProducts, category: pedidoCategories });

        } catch (e) { res.send(e) };

    },

    create: async (req, res) => {

        try {
            let todasLasCategorias = await db.Category.findAll();
            return res.render("productCreationForm", { categories: todasLasCategorias });

        } catch (e) { res.send(e) };

    },

    saveProduct: async (req, res) => {

        try {

            const resultValidation = validationResult(req);

            if(!resultValidation.errors.length > 0){

                let productoCreado = await db.Product.create({
                    name: req.body.name,
                    image: req.file != undefined ? req.file.filename : "default.png",
                    min: req.body.min,
                    max: req.body.max,
                    category_id: req.body.category,
                    rango: req.body.rango
                });

                res.redirect('/products');

            } else {
                //  return res.send(resultValidation.mapped())

                let todasLasCategorias = await db.Category.findAll();


                return res.render('productCreationForm', {
                    errors: resultValidation.mapped(), 
                    categories: todasLasCategorias,
                    old: req.body
                });
 

            }

        } catch (e) { res.send(e) };

    },

    edit: async (req, res) => {

        try {
            const pedidoProducts = await db.Product.findByPk(req.params.id, {
                include: [{ association: "category" }]
            });
            const pedidoCategories = await db.Category.findAll({
                include: [{ association: "privileges" }]
            });

            return res.render("productEditingForm", { product: pedidoProducts, categories: pedidoCategories });

        } catch (e) { res.send(e) };

    },

    update: async (req, res) => {

        try {

            const resultValidation = validationResult(req);

            if(!resultValidation.errors.length > 0){

                let productoActualizado = await db.Product.update({
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

                res.redirect('/products/' + req.params.id);

            } else {

                const pedidoProducts = await db.Product.findByPk(req.params.id, {
                    include: [{ association: "category" }]
                });
                const pedidoCategories = await db.Category.findAll({
                    include: [{ association: "privileges" }]
                });

                return res.render('productEditingForm', {
                    errors: resultValidation.mapped(), 
                    categories: pedidoCategories,
                    old: req.body,
                    product: pedidoProducts
                });

            }
        } catch (e) { res.send("soy el catch") };
    },

    detailId: async (req, res) => {

        try {
            const pedidoProduct = await db.Product.findByPk(req.params.id, {
                include: [{ association: "category" }]
            });
            const pedidoCategories = await db.Category.findAll({
                include: [{ association: "privileges" }]
            });

            return res.render("detailId", { product: pedidoProduct, category: pedidoCategories });

        } catch (e) { res.send(e) };
    },

    delete: async (req, res) => {

        try {
            let productoBorrado = await db.Product.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.redirect("/products/");

        } catch (e) { res.send(e) };

    },

}

module.exports = productController;