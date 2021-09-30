const express = require('express');
const apiUserController = require('../../controllers/api/apiUserController');
const router = express.Router();
const path = require ('path')
const ImageUserController = require('../../controllers/imageURL/imageURLController')

router.get('/image/user/:id', ImageUserController.imageShow);


module.exports = router;