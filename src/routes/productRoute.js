const express = require('express');
const productController = require('../controllers/productControllers');
const router = express.Router();


router.get('/productDetail' , productController.vistaDeLosProductos)

router.get('/productList' , productController.productList);

router.get("/productCreationForm", productController.create);

router.post("/productCreationForm", productController.saveProduct);

router.get("/productEditingForm", productController.edit);

router.put("/productEditingForm", productController.update);


module.exports = router;