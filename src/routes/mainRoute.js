const express = require('express');
const maincontroller = require('../controllers/mainController');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/' , maincontroller.index);


module.exports = router;



