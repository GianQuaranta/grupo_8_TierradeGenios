const express = require('express');
const userController = require('../controllers/usersController');
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

router.get('/register' , userController.register);
router.get('/login' , userController.login);
router.get('/contrasenia' , userController.contrasenia);
router.get('/list', userController.userList);
router.get('/profile', userController.profile)
    

router.post('/register', upload.single("avatar"), userController.create);
router.post('/login', userController.loginProcess)



module.exports = router;