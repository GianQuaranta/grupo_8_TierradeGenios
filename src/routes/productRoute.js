const express = require('express');
const productController = require('../controllers/productControllers');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, path.resolve(__dirname,"../../Public/img","products"))
        },
    
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage})


router.get('/detail' , productController.vistaDeLosProductos)

router.get('/' , productController.productList);

router.get("/create", productController.create);

router.get('/:id' , productController.detailId);

router.get("/productEditingForm", productController.edit);

router.post("/create", upload.single('rank1image'),productController.saveProduct);

router.put("/productEditingForm", productController.update);


module.exports = router;