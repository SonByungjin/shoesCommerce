import React, { Component } from "react";
import "./WishProduct.scss";

class WishProduct extends Component {
  render() {
    const { imgUrl, price, id, name, productModal } = this.props;
    return (
      <div className="WishProduct">
        <div className="wishProductImg">
          <div className="heartImgContainer">
            <img alt="heartImg" src="/images/WishList/heart_fill.png" />
          </div>
          <img src={imgUrl} />
        </div>
        <div className="wishProductInfo">
          <span>{name}</span>
          <span>{Number(price).toLocaleString("en")}원</span>
        </div>
        <div className="wishProductBuy">
          <span onClick={productModal}>바로구매하기</span>
        </div>
      </div>
    );
  }
}

export default WishProduct;
