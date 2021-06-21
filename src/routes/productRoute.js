const express = require('express');
const productController = require('../controllers/productControllers');
const router = express.Router();


router.get('/productDetail' , productController.vistaDeLosProductos)
router.get('/productList' , productController.productList);


module.exports = router;