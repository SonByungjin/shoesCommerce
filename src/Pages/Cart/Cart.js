import React from "react";
import "./Cart.scss";
import CartMain from "./CartMain";
import CartRight from "./CartRight";

class Cart extends React.Component {
  render() {
    return (
      <section className="Cart">
        <section className="CartContainer">
          <CartMain />
          <CartRight />
        </section>
      </section>
    );
  }
}

export default Cart;
