import React from "react";
import "./Cart.scss";
import CartMain from "./CartMain";
import CartRight from "./CartRight";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCount: 1,
      cartItems: [],
      originalPrice: 80000,
    };
  }

  componentDidMount() {
    this.setState({
      cartItems: [],
    });
  }

  render() {
    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="Cart">
          <section className="CartContainer">
            <CartMain
              itemCount={this.state.itemCount}
              cartItems={this.state.cartItems}
              originalPrice={this.state.originalPrice}
            />
            <CartRight cartItems={this.state.cartItems} />
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Cart;
