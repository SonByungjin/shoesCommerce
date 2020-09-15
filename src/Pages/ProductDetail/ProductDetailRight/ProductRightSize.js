import React from "react";
import "./ProductRightSize.scss";

class ProductRightSize extends React.Component {
  render() {
    return (
      <section className="ProductRightSize">
        <div className="first">
          <button>사이즈가 고민되면 클릭하세요!</button>
          <p>사이즈 가이드</p>
        </div>
        <div className="second">
          <div className="size">
            <span>250</span>
            <span>260</span>
            <span>270</span>
            <span>280</span>
          </div>
          <div className="quantity">
            <input value="1"></input>
            <button className="decrease">-</button>
            <button className="increase">+</button>
          </div>
        </div>
        <div className="third">
          <button className="cart">장바구니</button>
          <button className="buy">바로구매</button>
          <button className="heart"></button>
        </div>
      </section>
    );
  }
}

export default ProductRightSize;
