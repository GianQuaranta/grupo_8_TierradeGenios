const express = require('express');
const productController = require('../controllers/productControllers');
const route = express.Router();


route.get('/productDetail' , productController.vistaDeLosProductos)


module.exports = route;