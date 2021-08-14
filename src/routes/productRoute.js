const express = require('express');
const productController = require('../controllers/productControllers');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const adminMiddleware = require('../middlewares/authAdminMiddleware')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, path.resolve(__dirname,"../../Public/img","products"))
        },
    
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage})


router.get('/detail', productController.vistaDeLosProductos);

router.get('/' , productController.productList);

router.get("/create",[adminMiddleware] ,productController.create);

router.get('/:id' , productController.detailId);

router.get("/:id/edit",[adminMiddleware ],productController.edit);

router.post("/create",[adminMiddleware ], upload.single('rank1image'),productController.saveProduct);

router.put("/:id", [adminMiddleware ],upload.single('rank1image'), productController.update);

router.delete("/:id",[adminMiddleware ], productController.delete);


module.exports = router;