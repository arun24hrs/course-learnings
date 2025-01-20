/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="productItem">
      <img src={product.thumbnail} alt={product.title} className="productImage" />
      <h3>{product.title}</h3>
      <p>{product.price}$</p>
      <Link to={`/product/${product.id}`} className="viewDetails"><button>View Details</button></Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;