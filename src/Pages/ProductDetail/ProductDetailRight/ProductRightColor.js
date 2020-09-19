import React from "react";
import "./ProductRightColor.scss";

class ProductRightColor extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "화이트",
      style: "168635C",
    };
  }

  render() {
    return (
      <section className="ProductRightColor">
        <div className="ProductColorInfo">
          <div className="colorSection">
            <span className="colorSectionTitle">컬러</span>
            <span className="colorSectionProp">{this.state.color}</span>
          </div>
          <div className="styleSection">
            <span className="styleSectionTitle">스타일 : </span>
            <span className="styleSectionProp">{this.state.style}</span>
          </div>
        </div>
        <div className="ProductColorPic">
          <ul>
            <li>
              <img
                alt="ProductColorPic"
                src="https://image.converse.co.kr/cmsstatic/product/168635C_168635C_pdp-option.jpg?browse="
              />
              <img
                alt="ProductColorPic"
                src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_pdp-option.jpg?browse="
              />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductRightColor;
