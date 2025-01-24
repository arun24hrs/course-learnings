import express from "express";
import addToCart from "../controllers/cartController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, addToCart);

export {router};
