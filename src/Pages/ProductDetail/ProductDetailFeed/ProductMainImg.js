import React from "react";
import "./ProductMainImg.scss";

class ProductMainImg extends React.Component {
  render() {
    return (
      <div className="ProductMainImg">
        <section className="mainImg">
          <img
            alt="Product Main img"
            src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_pdp-primary.jpg?gallery="
          />
        </section>
        <section className="mainImg2">
          <ul>
            <li>
              <img src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_02.jpg?browse=" />
            </li>
            <li>
              <img src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_03.jpg?browse=" />
            </li>
            <li>
              <img src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_04.jpg?browse=" />
            </li>
            <li>
              <img src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_05.jpg?browse=" />
            </li>
            <li>
              <img src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_06.jpg?browse=" />
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default ProductMainImg;
