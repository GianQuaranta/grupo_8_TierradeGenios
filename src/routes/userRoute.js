const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/register' , userController.register);
router.post('/register' , userController.create);
router.get('/login' , userController.login);
router.get('/contrasenia' , userController.contrasenia);


module.exports = router;