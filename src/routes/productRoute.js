const express = require('express');
const productController = require('../controllers/productControllers');
const router = express.Router();


router.get('/detail' , productController.vistaDeLosProductos)

router.get('/list' , productController.productList);

router.get("/create", productController.create);

router.get('/:id' , productController.detailId);

router.get("/productEditingForm", productController.edit);

router.post("/productCreationForm", productController.saveProduct);

router.put("/productEditingForm", productController.update);


module.exports = router;