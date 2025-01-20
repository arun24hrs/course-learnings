
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, error } = useFetch(`https://dummyjson.com/products/${id}`);

  if (error) return <div>Error fetching product details!</div>;

  return (
    <div className="productDetail">
      <img src={product.thumbnail} alt={product.title} className="product-detail-image" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}$</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;