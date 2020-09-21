import React, { Component } from "react";
import "./WishProduct.scss";

class WishProduct extends Component {
  render() {
    const { imgUrl, price, id, name } = this.props;
    return (
      <div className="WishProduct">
        <div className="WishProductImg">
          <div className="heartImgContainer">
            <img src="/images/WishList/heart_fill.png" />
          </div>
          <img src={imgUrl} />
        </div>
        <div className="WishProductInfo">
          <p>{name}</p>
          <p>{Number(price).toLocaleString("en")}원</p>
        </div>
        <div className="WishProductBuy">
          <span>바로구매하기</span>
        </div>
      </div>
    );
  }
}

export default WishProduct;
