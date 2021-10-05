const express = require('express');
const apiUserController = require('../../controllers/api/apiUserController');
const router = express.Router();
const path = require('path')

router.get('/api/users', apiUserController.list);
router.get('/api/users/detail', apiUserController.detailList);
router.get('/api/users/:id', apiUserController.detail);


module.exports = router;