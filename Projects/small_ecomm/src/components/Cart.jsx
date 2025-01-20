/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cartItems">
      {cart.map((item) => (
          <div className="product-item" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="product-image"
            />
            <h3>{item.title}</h3>
            <p>{item.price}$</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
          </div>
          
      ))}
      </div>
    </div>
  );
}

export default Cart;
