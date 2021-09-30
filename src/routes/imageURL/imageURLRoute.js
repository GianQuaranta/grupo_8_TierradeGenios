const express = require('express');
const apiUserController = require('../../controllers/api/apiUserController');
const router = express.Router();
const path = require ('path')
const ImageURLController = require('../../controllers/imageURL/imageURLController')

router.get('/image/user/:id', ImageURLController.imageUser);
router.get('/image/product/:id', ImageURLController.imageProduct);


module.exports = router;