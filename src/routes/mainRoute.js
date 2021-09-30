const express = require('express');
const maincontroller = require('../controllers/mainController');
const router = express.Router();


router.get('/', maincontroller.index);
router.get("/about-us", maincontroller.aboutUs)


module.exports = router;



