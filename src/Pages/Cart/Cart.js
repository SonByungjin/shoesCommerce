import React from "react";
import "./Cart.scss";
import CartMain from "./CartMain";
import CartRight from "./CartRight";

class Cart extends React.Component {
  render() {
    return (
      <section className="Cart">
        <CartMain />
        <CartRight />
      </section>
    );
  }
}

export default Cart;
