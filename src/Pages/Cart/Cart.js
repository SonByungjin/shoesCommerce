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
      finalPrice: "",
      userToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoyfQ.e2QoqJJ9LKcihDt--hz4VutWxwqsqu2d-tjbT8msc5g",
    };
  }

  componentDidMount() {
    const { userToken } = this.state;
    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let finalPrice = 0;

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
          totalPrice += res1.cart_list[i].price * res1.cart_list[i].quantity;
          totalDiscountPrice +=
            res1.cart_list[i].price * (res1.cart_list[i].discount_rate / 100);
          finalPrice = totalPrice - totalDiscountPrice;
        }

        this.setState({
          cartItems: res1.cart_list,
          totalPrice: totalPrice,
          totalDiscountPrice: totalDiscountPrice,
          recommendProducts: res2.CartPageRecommendItems,
          finalPrice: finalPrice,
        });
      });
  }

  updateItems = () => {
    const { userToken } = this.state;
    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let finalPrice = 0;

    fetch("http://10.58.5.250:8000/orders/cart", {
      headers: {
        Authorization: userToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.cart_list.length; i++) {
          totalPrice += res.cart_list[i].price * res.cart_list[i].quantity;
          totalDiscountPrice +=
            res.cart_list[i].price * (res.cart_list[i].discount_rate / 100);
          finalPrice = totalPrice - totalDiscountPrice;
        }
        this.setState({
          cartItems: res.cart_list,
          totalPrice: totalPrice.toLocaleString(),
          totalDiscountPrice: totalDiscountPrice.toLocaleString(),
          finalPrice: finalPrice.toLocaleString(),
        });
      });
  };

  handleIncrease = (cartId) => {
    const { userToken, cartItems } = this.state;

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
          this.updateItems();
        }
      });
  };

  handleDecrease = (cartId) => {
    const { userToken, cartItems } = this.state;

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
          this.updateItems();
        }
      });
  };

  handleOneDelete = (cartId) => {
    const { userToken, cartItems } = this.state;

    const action = window.confirm("정말로 지우시겠습니까?");
    if (action === true) {
      fetch(`http://10.58.5.250:8000/orders/cart/${cartId}`, {
        method: "DELETE",
        headers: { Authorization: userToken },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState(
            {
              cartItems: cartItems.filter((cartItem) => {
                if (cartItem.cart_id === cartId) {
                  return false;
                }
                return true;
              }),
            },
            this.updateItems()
          );
        });
    } else {
      return;
    }
  };

  handleAllDelete = () => {
    const { userToken, cartItems } = this.state;

    const action = window.confirm("정말로 비우시겠습니까?");
    if (action === true) {
      console.log("삭제완료");
      fetch(`http://10.58.5.250:8000/orders/cart`, {
        method: "DELETE",
        headers: { Authorization: userToken },
      })
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            cartItems: [],
          })
        );
    } else {
      return;
    }
  };

  render() {
    const {
      cartItems,
      totalPrice,
      totalDiscountPrice,
      recommendProducts,
      finalPrice,
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
              handleOneDelete={this.handleOneDelete}
              handleAllDelete={this.handleAllDelete}
            />
            <CartRight
              totalPrice={totalPrice}
              totalDiscountPrice={totalDiscountPrice}
              finalPrice={finalPrice}
            />
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Cart;
