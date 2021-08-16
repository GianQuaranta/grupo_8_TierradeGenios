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


router.get('/detail', productController.vistaDeLosProductos);  // Falta 

router.get('/' , productController.productList); // CRUD Sequelize Realizado

router.get("/create",[adminMiddleware], productController.create); // CRUD Sequelize Realizado

router.get('/:id', productController.detailId); // CRUD Sequelize Realizado

router.get("/:id/edit", [adminMiddleware], productController.edit); // CRUD Sequelize Realizado

router.post("/create", [adminMiddleware], upload.single('image'),productController.saveProduct); // CRUD Sequelize Realizado

router.put("/:id", [adminMiddleware], upload.single('image'), productController.update); // CRUD Sequelize Realizado

router.delete("/:id", [adminMiddleware], productController.delete); // Falta


module.exports = router;