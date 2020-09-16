import React from "react";
import "./ProductRightSize.scss";

class ProductRightSize extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogined: true,
    };
  }

  render() {
    return (
      <section className="ProductRightSize">
        <div className="first">
          <div>사이즈가 고민되면 클릭하세요!</div>
          <span>사이즈 가이드</span>
        </div>
        <div className="second">
          <div className="size">
            <span>250</span>
            <span>260</span>
            <span>270</span>
            <span>280</span>
          </div>
          <div className="quantity">
            <input className="quantitySelect" value="1"></input>
            <button className="decrease">-</button>
            <button className="increase">+</button>
          </div>
        </div>
        <div className="third">
          {this.state.isLogined ? (
            <div className="isLogout">
              <div className="loginBtn">로그인</div>
            </div>
          ) : (
            <div className="isLogin">
              <span className="cart">장바구니</span>
              <span className="buy">바로구매</span>
              <span className="heart">♥</span>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default ProductRightSize;
