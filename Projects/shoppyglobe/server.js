import express from "express";
import connectDB from "./db.js"; 
import {router as productRoute} from "./routes/productRoutes.js";
import {router as cartRoutes} from "./routes/cartRoutes.js";
import {router as authRouter} from './routes/authRoutes.js'

connectDB();

const app = express();
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));