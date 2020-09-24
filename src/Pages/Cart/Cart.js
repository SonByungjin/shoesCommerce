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
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoyfQ.e2QoqJJ9LKcihDt--hz4VutWxwqsqu2d-tjbT8msc5g",
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
          totalPrice += res1.cart_list[i].price * res1.cart_list[i].quantity;
          totalDiscountPrice +=
            res1.cart_list[i].price * (res1.cart_list[i].discount_rate / 100);
        }
        this.setState({
          cartItems: res1.cart_list,
          totalPrice: totalPrice.toLocaleString(),
          totalDiscountPrice: totalDiscountPrice.toLocaleString(),
          recommendProducts: res2.CartPageRecommendItems,
        });
      });
  }

  // componentDidUpdate() {
  //   const { userToken } = this.state;
  //   let totalPrice = 0;
  //   let totalDiscountPrice = 0;

  //   fetch("http://10.58.5.250:8000/orders/cart", {
  //     headers: {
  //       Authorization: userToken,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       for (let i = 0; i < res.cart_list.length; i++) {
  //         totalPrice += res.cart_list[i].price * res.cart_list[i].quantity;
  //         totalDiscountPrice +=
  //           res.cart_list[i].price * (res.cart_list[i].discount_rate / 100);
  //       }
  //       this.setState({
  //         cartItems: res.cart_list,
  //         totalPrice: totalPrice.toLocaleString(),
  //         totalDiscountPrice: totalDiscountPrice.toLocaleString(),
  //       });
  //     });
  // }

  handleIncrease = (cartId) => {
    const { userToken } = this.state;
    const { cartItems } = this.state;

    let totalPrice = 0;
    let totalDiscountPrice = 0;

    this.setState(
      {
        cartItems: cartItems.map((cartItem) => {
          if (cartItem.cart_id === cartId && cartItem.quantity < 5) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        }),
      },
      () => {
        console.log(cartItems);
        for (let i = 0; i < cartItems.length; i++) {
          totalPrice += cartItems[i].price * cartItems[i].quantity;
          totalDiscountPrice +=
            cartItems[i].price * (cartItems[i].discount_rate / 100);
        }
        console.log(totalPrice);
        this.setState({
          totalPrice: totalPrice.toLocaleString(),
          totalDiscountPrice: totalDiscountPrice.toLocaleString(),
        });
      }
    );

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

    let totalPrice = 0;
    let totalDiscountPrice = 0;

    this.setState(
      {
        cartItems: cartItems.map((cartItem) => {
          if (cartItem.cart_id === cartId && cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        }),
      },
      () => {
        console.log(cartItems);
        for (let i = 0; i < cartItems.length; i++) {
          totalPrice += cartItems[i].price * cartItems[i].quantity;
          totalDiscountPrice +=
            cartItems[i].price * (cartItems[i].discount_rate / 100);
        }
        console.log(totalPrice);
        this.setState({
          totalPrice: totalPrice.toLocaleString(),
          totalDiscountPrice: totalDiscountPrice.toLocaleString(),
        });
      }
    );

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

  handleOneDelete = (cartId) => {
    const { userToken } = this.state;
    const { cartItems } = this.state;

    const action = window.confirm("정말로 지우시겠습니까?");
    if (action == true) {
      fetch(`http://10.58.5.250:8000/orders/cart/${cartId}`, {
        method: "DELETE",
        headers: { Authorization: userToken },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            cartItems: cartItems.filter((cartItem) => {
              if (cartItem.cart_id === cartId) {
                return false;
              }
              return true;
            }),
          });
        });
    } else {
      return;
    }
  };

  handleAllDelete = () => {
    const { userToken } = this.state;
    const { cartItems } = this.state;

    const action = window.confirm("정말로 비우시겠습니까?");
    if (action == true) {
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
            />
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Cart;
