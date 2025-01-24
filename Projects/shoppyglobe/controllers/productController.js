import Product from "../models/Product.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found." });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product details." });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    // Validation
    if (!name || !price || !description || !stock) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      stock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to create product." });
  }
};

// Update an existing product
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    // Find and update the product
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, stock }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to update product." });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product." });
  }
};
