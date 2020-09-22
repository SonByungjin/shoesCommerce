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
      itemCount: 3,
      cartItems: [],
      totalPrice: "",
      totalDiscountPrice: "",
    };
  }

  componentDidMount() {
    let totalPrice = 0;
    let totalDiscountPrice = 0;

    fetch(`http://localhost:3000/data/ProductDetail/CartItemsMOCK.json`)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.cartItem.length; i++) {
          totalPrice += res.cartItem[i].originalPrice;
          totalDiscountPrice +=
            res.cartItem[i].originalPrice *
            (res.cartItem[i].discount_rate / 100);
        }
        this.setState({
          cartItems: res.cartItem,
          totalPrice: totalPrice,
          totalDiscountPrice,
        });
      });
  }

  render() {
    const { itemCount, cartItems, totalPrice, totalDiscountPrice } = this.state;

    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="Cart">
          <section className="CartContainer">
            <CartMain itemCount={itemCount} cartItems={cartItems} />
            <CartRight
              totalPrice={totalPrice}
              totalDiscountPrice={totalDiscountPrice}
            />
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Cart;
