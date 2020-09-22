import React from "react";
import "./CartMain.scss";
import CartMainItem from "./CartMainItem";
import ProductDetailRecommend from "../ProductDetail/ProductDetailRecommend/ProductDetailRecommend";

class CartMain extends React.Component {
  render() {
    const { itemCount, cartItems } = this.props;

    return (
      <section className="CartMain">
        <div className="CartMainTitle">
          <h1>{`장바구니 (${itemCount})`}</h1>
        </div>
        <div className="CartMainMessage">
          <span>
            신규 회원 가입 시, 즉시 사용 가능한 1만원 할인 코드 발급해드립니다.
            (*5만원 이상 결제 시)
          </span>
        </div>
        <section className="CartMainItems">
          <div className="CartMainItemsContainer">
            {cartItems.map((item, index) => {
              return <CartMainItem key={index} cartItem={item} />;
            })}
          </div>
          <div className="CartMainItemsDeleteContainer">
            <button className="CartMainItemsDeleteBtn">장바구니 비우기</button>
          </div>
        </section>
        <section className="CartProductRecommend">
          <ProductDetailRecommend />
        </section>
      </section>
    );
  }
}

export default CartMain;
