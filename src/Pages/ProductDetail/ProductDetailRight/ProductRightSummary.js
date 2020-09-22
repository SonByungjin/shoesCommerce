import React from "react";
import "./ProductRightSummary.scss";

class ProductRightSummary extends React.Component {
  render() {
    const { productInfo } = this.props;

    return (
      <section className="ProductRightSummary">
        <h1 className="productName">{productInfo.series_name}</h1>
        <p className="productPrice">
          {productInfo.price && productInfo.price.toLocaleString()}
        </p>
        <p className="productGender">{productInfo.sex}</p>
        <div className="productDetailsBox">
          <span className="productDetails">
            {productInfo.simple_description}
          </span>
          <span className="showMore">더보기</span>
        </div>
        <p className="productReview">☆☆☆☆☆</p>
      </section>
    );
  }
}

export default ProductRightSummary;
