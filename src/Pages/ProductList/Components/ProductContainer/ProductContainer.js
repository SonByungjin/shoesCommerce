import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      loveItAnimation: false,
    };
  }

  colorListValid = () => {
    this.setState({
      colorListValid: !this.state.colorListValid,
    });
  };

  handleHeart = (mainId) => {
    this.setState({
      heartBoolean: !this.state.heartBoolean,
    });
<<<<<<< HEAD
    // console.log(localStorage.getItem("token"));
    fetch("http://10.58.5.117:8000/false_account/wishlist", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        product_id: mainId,
      }),
    });
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result);
    // });
    // console.log(mainId);
=======
    this.setState({
      loveItAnimation: !this.state.loveItAnimation,
    });
    // fetch("http://10.58.5.117:8000/false_account/wishlist", {
    //   method: "POST",
    //   headers: JSON.stringify({
    //     Authorization: localStorage.getItem("token"),
    //   }),
    //   body: JSON.stringify({
    //     id: mainId,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //   });
>>>>>>> master
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
      loveItAnimation,
    } = this.state;
    const { mainId, imgUrl, name, price, colorList } = this.props;
    const [frontImg, backImg] = imgUrl;

    return (
      <div
        className="ProductContainer"
        onMouseOver={this.colorListValid}
        onMouseOut={this.colorListValid}
      >
        <div
          className={
            loveItAnimation ? "loveItContainer" : "loveItContainerUnvalid"
          }
        >
          <ul className="loveIttext">
            <li className="noOneLoveIt">LOVE IT</li>
            <li className="noTwoLoveIt">LOVE IT</li>
            <li className="noThreeLoveIt">LOVE IT</li>
            <li className="noFourLoveIt">LOVE IT</li>
            <li className="noFiveLoveIt">LOVE IT</li>
            <li className="noSixLoveIt">LOVE IT</li>
          </ul>
        </div>
        <div className="productImage" key={this.props.id}>
          <div className="heartImgContainer">
            <img
              alt="heartImg"
              onClick={() => this.handleHeart(mainId)}
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
          <Link to={`/productDetail/${mainId}`}>
            <div className="mainShoesImage">
              <img
                alt="frontShoesImg"
                className="frontShoesImg"
                src={frontImg}
              />
              <img alt="backShoesImg" className="backShoesImg" src={backImg} />
            </div>
          </Link>
          <div className="shoesImageByColor">
            {colorList.map((colorEl, idx) => {
              const { id, image_url } = colorEl;
              return (
                <div
                  key={id}
                  pdSerialNumber={id}
                  className={
                    this.state.showColorShoesImage === idx
                      ? "showColorShoesImage"
                      : "colorShoesImage"
                  }
                >
                  <img
                    alt="colorShoesImageFront"
                    src={image_url[0]}
                    className="colorShoesImageFront"
                  />
                  <img
                    alt="colorShoesImageBack"
                    src={image_url[1]}
                    className="colorShoesImageBack"
                  />
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
