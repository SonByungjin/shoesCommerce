import React from "react";
import CartMain from "./CartMain";
import CartRight from "./CartRight";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      recommendProducts: [],
      totalPrice: "",
      totalDiscountPrice: "",
      userToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo2fQ.wHby_biqql1xpQEL5W1s6NbWrv1HJ8sff984oGlLXjI",
    };
  }

  componentDidMount() {
    const { userToken } = this.state;
    let totalPrice = 0;
    let totalDiscountPrice = 0;

    Promise.all([
      fetch("http://10.58.5.250:8000/orders/cart", {
        headers: {
          Authorization: userToken,
          // Authorization: localStorage.getItem("access_token"),
        },
      }),
      fetch("http://localhost:3000/data/ProductDetail/CartPageRecommend.json"),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        for (let i = 0; i < res1.cart_list.length; i++) {
          totalPrice += res1.cart_list[i].price;
          totalDiscountPrice +=
            res1.cart_list[i].price * (res1.cart_list[i].discount_rate / 100);
        }
        this.setState({
          cartItems: res1.cart_list,
          totalPrice,
          totalDiscountPrice,
          recommendProducts: res2.CartPageRecommendItems,
        });
      });
  }

  handleIncrease = (cartId) => {
    const { userToken } = this.state;
    const { cartItems } = this.state;

    this.setState({
      cartItems: cartItems.map((cartItem) => {
        if (cartItem.cart_id === cartId && cartItem.quantity < 5) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      }),
    });

    fetch(`http://10.58.5.250:8000/orders/cart`, {
      method: "PATCH",
      headers: {
        Authorization: userToken,
      },
      body: JSON.stringify({
        cart_id: cartId,
        quantity_change: +1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "MODIFIED") {
          console.log("증가 성공");
        } else {
          console.log("5개 이상으로 올라갈 수 없습니다.");
        }
      });
  };

  handleDecrease = (cartId) => {
    const { userToken } = this.state;
    const { cartItems } = this.state;

    this.setState({
      cartItems: cartItems.map((cartItem) => {
        if (cartItem.cart_id === cartId && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      }),
    });

    fetch(`http://10.58.5.250:8000/orders/cart`, {
      method: "PATCH",
      headers: {
        Authorization: userToken,
      },
      body: JSON.stringify({
        cart_id: cartId,
        quantity_change: -1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "MODIFIED") {
          console.log("감소 성공");
        } else {
          console.log("1개 이하로 내려갈 수 없습니다.");
        }
      });
  };

  render() {
    const {
      cartItems,
      totalPrice,
      totalDiscountPrice,
      recommendProducts,
    } = this.state;

    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="cart">
          <section className="cartContainer">
            <CartMain
              cartItems={cartItems}
              recommendItems={recommendProducts}
              increaseQuantity={this.handleIncrease}
              decreaseQuantity={this.handleDecrease}
            />
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
