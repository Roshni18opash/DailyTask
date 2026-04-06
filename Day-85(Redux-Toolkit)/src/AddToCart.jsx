import React from "react";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const selector = useSelector((state) => state.cart);
  return (
    <div className="cart">
      🛒
      <span className="cart-count">{selector.value}</span>
    </div>
  );
};

export default AddToCart;
