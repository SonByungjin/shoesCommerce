import React from "react";
import "./ProductMainImg.scss";

class ProductMainImg extends React.Component {
  render() {
    const { productMainImg } = this.props;
    const { productSubImg } = this.props;

    return (
      <div className="ProductMainImg">
        <section className="mainImg">
          <img alt="Product Main img" src={productMainImg} />
        </section>
        <section className="mainImgMore">
          <div className="imgMoreContainer">
            <ul>
              {productSubImg?.map((product, index) => {
                return (
                  <li key={index}>
                    <img alt="productSubImg" src={product.medium_url}></img>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductMainImg;
