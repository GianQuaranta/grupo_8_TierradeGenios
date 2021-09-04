const express = require('express');
const userController = require('../controllers/usersController');
const adminMiddleware = require('../middlewares/authAdminMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const router = express.Router();
const multer = require('multer')
const path = require ('path')
const { body } = require('express-validator');

const validationLogin = [
    body('email').notEmpty().withMessage("Debes ingresar el email con el que estas registrado").bail()
    .isEmail().withMessage("Debe ingresar un formato de email válido"),

    body('password').notEmpty().withMessage("Debes ingresar tu contraseña")
];

const validationRegister = [
    body("firstName").notEmpty().withMessage("Debes ingresar tu nombre").bail()
    .isLength({min: 2}).withMessage("El nombre debe tener un mínimo de dos caracteres"),

    body('lastName').notEmpty().withMessage('Debes ingresar su apellido')
    .isLength({min: 2}).withMessage('El apellido debe tener un mínimo de dos caracteres'),

    body('email').notEmpty().withMessage('Debes ingresar un correo electrónico')
    .isEmail().withMessage("Debe ingresar un formato de email válido"),

    body('birthDate').notEmpty().withMessage('Debes ingresar una fecha de nacimiento'),

    body('adress').notEmpty().withMessage('Debes ingresar tu domicilio actual'),

    body('phoneNumber').notEmpty().withMessage('Debes ingresar tu número telefónico')
    .isNumeric({no_symbols: true}).withMessage('Debes ingresar un número telefónico válido'),

    body('country').notEmpty().withMessage('Debes ingresar tu país de residencia'),

    body('password').notEmpty().withMessage('Debes ingresar una contaseña').bail()
    .isLength( {min: 8} ).withMessage('La contraseña debe tener un mínimo de 8 caracteres')
    .isStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }).withMessage('La contraseña debe contener al menos: una minúscula, una mayúscula, un número y un caracter especial'),

    body('passwordConfirm').notEmpty().withMessage('Debes ingresar una contaseña').bail()
    .custom((value, { req }) => {
        if (value !== req.body.password) { 
            throw new Error("Las contraseñas no coinciden") 
        }
        return true
    }), 

    body('medio_de_pago').notEmpty().withMessage('Debes seleccionar al menos un medio de contribución'),


    body('avatar').custom((value, { req }) => {
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
    })

]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, path.resolve(__dirname,"../../Public/img","users"))
        },
    
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage})

router.get('/register' , [guestMiddleware], userController.register); // CRUD Sequelize Realizado
router.get('/login' , [guestMiddleware],userController.login); // CRUD Sequelize Realizado
router.get('/contrasenia' , userController.contrasenia); // CRUD Sequelize Realizado
router.get('/list', [adminMiddleware],userController.userList); // CRUD Sequelize Realizado
router.get('/profile', [authMiddleware], userController.profile); // CRUD Sequelize Realizado
router.get('/logout', userController.logout); // CRUD Sequelize Realizado
router.get('/:id/edit', [authMiddleware], userController.edit); // CRUD Sequelize Realizado
router.get('/:id', [adminMiddleware], userController.userDetailAdmin); // CRUD Sequelize Realizado

router.post('/register', upload.single("avatar"), validationRegister, userController.create); // CRUD Sequelize Realizado
router.post('/login',validationLogin, userController.loginProcess); // CRUD Sequelize Realizado
router.put('/:id/edit', [authMiddleware], upload.single('avatar'), validationRegister, userController.update); // CRUD Sequelize Realizado
router.delete("/:id", [adminMiddleware], userController.deleteUser); // CRUD Sequelize Realizado


module.exports = router;