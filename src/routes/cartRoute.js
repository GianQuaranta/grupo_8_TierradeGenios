const express = require('express');
const route = express.Router();
const cartController = require('../controllers/cartController');

route.get('/productCart' , cartController.vistaDelCarrito);


module.exports = route;