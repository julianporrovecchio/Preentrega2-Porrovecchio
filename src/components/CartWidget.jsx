import React from "react";
import cart from "../assets/cart-shopping.svg";

const CartWidget = () => {
  return (
    <>
      <div>
        <img src={cart} alt="cart" />
        <span>(10)</span>
      </div>
    </>
  );
};

export default CartWidget;
