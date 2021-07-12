const express = require('express');
const userController = require('../controllers/usersController');
const router = express.Router();

router.get('/register' , userController.register);
/*router.post('/register' , userController.create);*/
router.get('/login' , userController.login);
router.get('/contrasenia' , userController.contrasenia);
router.get('/list', userController.userList);

module.exports = router;