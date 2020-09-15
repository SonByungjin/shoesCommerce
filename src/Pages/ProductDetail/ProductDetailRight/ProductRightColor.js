import React from "react";
import "./ProductRightColor.scss";

class ProductRightColor extends React.Component {
  render() {
    return (
      <section className="ProductRightColor">
        <div className="ProducColorInfo">
          <div className="color">컬러 ${}</div>
          <div className="style">스타일 : ${}</div>
        </div>
        <div className="ProductColorPic">
          <ul>
            <li>
              <img src="https://image.converse.co.kr/cmsstatic/product/168635C_168635C_pdp-option.jpg?browse=" />
              <img src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_pdp-option.jpg?browse=" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductRightColor;
