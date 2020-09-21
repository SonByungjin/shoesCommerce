import React, { Component } from "react";
import ProductColors from "./ProductColors/ProductColors";
import "./ProductContainer.scss";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartImg: [
        "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png",
        "/images/productList/heart_fill.png",
      ],
      heartBoolean: false,
      showColorShoesImage: null,
      colorListValid: false,
      selectColorValid: props.mainId,
    };
  }

  colorListValid = () => {
    this.setState({
      colorListValid: !this.state.colorListValid,
    });
  };

  handleHeart = (e) => {
    this.setState({
      heartBoolean: !this.state.heartBoolean,
    });
  };

  changeImage = (idx) => {
    this.setState({
      showColorShoesImage: idx,
    });
  };

  fixedImageAndSelectColor = (colorEl, id) => {
    this.props.fixedImage(colorEl);
    this.setState({
      selectColorValid: id,
    });
  };

  render() {
    const {
      heartImg,
      heartBoolean,
      colorListValid,
      selectColorValid,
    } = this.state;
    const { imgUrl, name, price, colorList, DynamicRouting } = this.props;
    const [frontImg, backImg] = imgUrl;

    return (
      <div
        className="ProductContainer"
        onMouseOver={this.colorListValid}
        onMouseOut={this.colorListValid}
      >
        <div className="productImage" key={this.props.id}>
          <div className="heartImgContainer">
            <img
              alt="heartImg"
              onClick={this.handleHeart}
              className="heartImgEmpty"
              src={heartImg[0]}
            />
            <img
              alt="heartImg"
              onClick={this.handleHeart}
              className={
                heartBoolean ? "heartImgFillValid" : "heartImgFillUnvalid"
              }
              src={heartImg[1]}
            />
          </div>
          <div className="mainShoesImage" onClick={DynamicRouting}>
            <img alt="frontShoesImg" className="frontShoesImg" src={frontImg} />
            <img alt="backShoesImg" className="backShoesImg" src={backImg} />
          </div>
          <div className="shoesImageByColor">
            {colorList.map((colorEl, idx) => {
              const { id, image_url } = colorEl;
              return (
                <div
                  pdSerialNumber={id}
                  className={
                    this.state.showColorShoesImage === idx
                      ? "showColorShoesImage"
                      : "colorShoesImage"
                  }
                >
                  <img src={image_url[0]} className="colorShoesImageFront" />
                  <img src={image_url[1]} className="colorShoesImageBack" />
                </div>
              );
            })}
          </div>
        </div>
        <p className="productName">{name}</p>
        <p className="productPrice">{Number(price).toLocaleString("en")}원</p>
        <ProductColors
          colorList={colorList}
          changeImage={this.changeImage}
          fixedImageAndSelectColor={(colorEl, id) =>
            this.fixedImageAndSelectColor(colorEl, id)
          }
          colorListValid={colorListValid}
          selectColorValid={selectColorValid}
        />
      </div>
    );
  }
}

export default ProductContainer;