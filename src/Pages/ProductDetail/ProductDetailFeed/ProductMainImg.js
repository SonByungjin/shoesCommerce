import React from "react";
import "./ProductMainImg.scss";

class ProductMainImg extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="ProductMainImg">
        <section className="mainImg">
          <img alt="Product Main img" src={this.props.productMainImage} />
        </section>
        <section className="mainImgMore">
          <div className="imgMoreContainer">
            <ul>
              <li>
                <img
                  alt="Product MainDetailImg"
                  src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_02.jpg?browse="
                />
              </li>
              <li>
                <img
                  alt="Product MainDetailImg"
                  src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_03.jpg?browse="
                />
              </li>
              <li>
                <img
                  alt="Product MainDetailImg"
                  src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_04.jpg?browse="
                />
              </li>
              <li>
                <img
                  alt="Product MainDetailImg"
                  src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_05.jpg?browse="
                />
              </li>
              <li>
                <img
                  alt="Product MainDetailImg"
                  src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_06.jpg?browse="
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductMainImg;
