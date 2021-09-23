const express = require('express');
const route = express.Router();
const cartController = require('../controllers/cartController');

route.get('/cart' , cartController.vistaDelCarrito);


module.exports = route;