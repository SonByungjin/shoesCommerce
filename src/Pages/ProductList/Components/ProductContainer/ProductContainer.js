import React, { Component } from "react";
import "./ProductContainer.scss";

class ProductContainer extends Component {
  render() {
    return (
      <div className="ProductContainer">
        <div className="productImage" key={this.props.id}>
          <img
            alt="heartImg"
            className="heartImg"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img alt="shoesImg" className="shoesImg" src={this.props.src} />
        </div>
        <p>{this.props.name}</p>
        <p>{this.props.price}원</p>
      </div>
    );
  }
}

export default ProductContainer;
