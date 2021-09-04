const express = require('express');
const productController = require('../controllers/productControllers');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const adminMiddleware = require('../middlewares/authAdminMiddleware');
const { body } = require('express-validator');

const validationsProduct = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre').bail().isLength( {min: 5} ).withMessage('El nombre debe tener un mínimo de cinco caracteres'),
    body('min').notEmpty().withMessage('Debes ingresar un mínimo').bail().isNumeric({no_symbols: true}).withMessage('Solo se acepta formato number'),
    body('max').notEmpty().withMessage('Debes ingresar un máximo').bail().isNumeric({no_symbols: true}).withMessage('Solo se acepta formato number'),
    body('rango').notEmpty().withMessage('Debes seleccionar un rango'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions =  [
            '.jpg', '.jpeg', '.png', '.gif'
        ]            
     
        if(!file) {
            throw new Error ('Tienes que subir una imagen');

        } else {
            let fileExtension = path.extname(req.file.originalname);

            if (!acceptedExtensions.includes(fileExtension)){
                
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true
    }),
    
    body('category').custom((value, { req }) => { 
        
        let valorCategory = req.body.category;

        console.log("este", valorCategory);

        if(!valorCategory){
            throw new Error ('Tienes que seleccionar una categoría');
        }

        return true

    }),
]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, path.resolve(__dirname,"../../Public/img","products"))
        },
    
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage})


router.get('/detail', productController.vistaDeLosProductos);  // Falta agregar los privilegios desde la DB (no indispensable en este momento)

router.get('/' , productController.productList); // CRUD Sequelize Realizado

router.get("/create",/**[adminMiddleware],**/ productController.create); // CRUD Sequelize Realizado

router.get('/:id', productController.detailId); // CRUD Sequelize Realizado

router.get("/:id/edit", /**[adminMiddleware],**/ productController.edit); // CRUD Sequelize Realizado

router.post("/create", /**[adminMiddleware],**/ upload.single('image'), validationsProduct,productController.saveProduct); // CRUD Sequelize Realizado

router.put("/:id", /**[adminMiddleware],**/ upload.single('image'), validationsProduct, productController.update); // CRUD Sequelize Realizado

router.delete("/:id", [adminMiddleware], productController.delete); // CRUD Sequelize Realizado


module.exports = router;