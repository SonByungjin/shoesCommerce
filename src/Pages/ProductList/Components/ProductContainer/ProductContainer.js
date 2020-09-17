import React, { Component } from "react";
import "./ProductContainer.scss";

class ProductContainer extends Component {
  constructor() {
    super();
    this.state = {
      heartImg: [
        "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png",
        "/images/productList/heart_fill.png",
      ],
      heartBoolean: false,
    };
  }
  handleHeart = (e) => {
    this.setState({
      heartBoolean: !this.state.heartBoolean,
    });
  };

  render() {
    const { heartImg, heartBoolean } = this.state;
    const { src, name, price } = this.props;
    return (
      <div className="ProductContainer">
        <div className="productImage" key={this.props.id}>
          <img
            alt="heartImg"
            onClick={this.handleHeart}
            className="heartImgEmpty"
            src={heartImg[0]}
          />
          <img
            alt="heartImg"
            // className="heartImgFill"
            onClick={this.handleHeart}
            className={
              heartBoolean ? "heartImgFillValid" : "heartImgFillUnvalid"
            }
            src={heartImg[1]}
          />

          <img alt="frontShoesImg" className="frontShoesImg" src={src[0]} />
          <img alt="backShoesImg" className="backShoesImg" src={src[1]} />
        </div>
        <p>{name}</p>
        <p>{Number(price).toLocaleString("en")}원</p>
      </div>
    );
  }
}

export default ProductContainer;
