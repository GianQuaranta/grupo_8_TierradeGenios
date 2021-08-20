const express = require('express');
const userController = require('../controllers/usersController');
const adminMiddleware = require('../middlewares/authAdminMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const router = express.Router();
const multer = require('multer')
const path = require ('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, path.resolve(__dirname,"../../Public/img","users"))
        },
    
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage})

router.get('/register' , [guestMiddleware], userController.register); // Queda igual
router.get('/login' , [guestMiddleware],userController.login); // Queda igual
router.get('/contrasenia' , userController.contrasenia); // Queda igual
router.get('/list',[adminMiddleware] ,userController.userList); // CRUD Sequelize Realizado
router.get('/profile', [authMiddleware], userController.profile); // Falta
router.get('/logout', userController.logout); // Queda igual
router.get('/:id/edit', userController.edit);

router.post('/register', upload.single("avatar"), userController.create); // CRUD Sequelize Realizado
router.post('/login', userController.loginProcess); // Falta
router.put('/:id/edit', upload.single('avatar'), userController.update);
router.delete("/:id", [adminMiddleware], userController.deleteUser);


module.exports = router;