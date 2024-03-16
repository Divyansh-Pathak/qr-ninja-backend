const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Route to get all t-shirts
router.get('/', ProductController.getAllProducts);

// Route to create a new t-shirt
router.post('/createProduct', ProductController.createProduct);

module.exports = router;
