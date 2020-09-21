import React from "react";
import "./Cart.scss";
import CartMain from "./CartMain";
import CartRight from "./CartRight";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

class Cart extends React.Component {
  render() {
    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="Cart">
          <section className="CartContainer">
            <CartMain />
            <CartRight />
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Cart;
