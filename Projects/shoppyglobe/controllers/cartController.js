import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  console.log(userId, productId, quantity)
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found." });
    await Cart.create({ user: userId, product: productId, quantity })

    res.status(200).json({ message: "Item added to cart." });
  } catch (err) {
    res.status(500).json({ error: "Failed to add item to cart." });
  }
};

export default addToCart;