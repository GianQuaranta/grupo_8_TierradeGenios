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

router.get('/register' , [guestMiddleware], userController.register);
router.get('/login' , [guestMiddleware],userController.login);
router.get('/contrasenia' , userController.contrasenia);
router.get('/list',[adminMiddleware] ,userController.userList);
router.get('/profile', [authMiddleware], userController.profile)
router.get('/logout', userController.logout)
    

router.post('/register', upload.single("avatar"), userController.create);
router.post('/login', userController.loginProcess)



module.exports = router;