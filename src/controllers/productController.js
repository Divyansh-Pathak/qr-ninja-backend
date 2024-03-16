const Product = require('../models/productModel.js');

// Controller for handling GET request to fetch all t-shirts
exports.getAllProducts = async (req, res) => {
    console.log("hello");
  try {
    const Products = await Product.find();
    res.json(Products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for handling POST request to create a new t-shirt
exports.createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    // Add other properties as needed
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
