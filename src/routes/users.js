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

router.get('/register' , [guestMiddleware], userController.register); // Falta
router.get('/login' , [guestMiddleware],userController.login); // Falta
router.get('/contrasenia' , userController.contrasenia); // Falta
router.get('/list',[adminMiddleware] ,userController.userList); // Falta
router.get('/profile', [authMiddleware], userController.profile); // Falta
router.get('/logout', userController.logout); // Falta
     

router.post('/register', upload.single("avatar"), userController.create); // Falta
router.post('/login', userController.loginProcess); // Falta



module.exports = router;