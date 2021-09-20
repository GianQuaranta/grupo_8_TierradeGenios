const express = require('express');
const apiProductController = require('../../controllers/api/apiProductController');
const router = express.Router();
const path = require ('path')

router.get('/api/products', apiProductController.list);
router.get('/api/products/:id', apiProductController.detail);


module.exports = router;