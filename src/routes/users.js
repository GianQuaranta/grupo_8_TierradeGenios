const express = require('express');
const userController = require('../controllers/usersController');
const adminMiddleware = require('../middlewares/authAdminMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const router = express.Router();
const multer = require('multer')
const path = require ('path')
const { body } = require('express-validator')

const validationLogin = [
    body('email').notEmpty().withMessage("Debes ingresar el email con el que estas registrado").bail()
    .isEmail().withMessage("Debe ingresar un formato de email válido"),

    body('password').notEmpty().withMessage("Debes ingresar tu contraseña")
    

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

router.post('/register', upload.single("avatar"), userController.create); // CRUD Sequelize Realizado
router.post('/login',validationLogin, userController.loginProcess); // CRUD Sequelize Realizado
router.put('/:id/edit', upload.single('avatar'), userController.update); // Falta revisar con Edu y/o Agus
router.delete("/:id", [adminMiddleware], userController.deleteUser); // CRUD Sequelize Realizado


module.exports = router;