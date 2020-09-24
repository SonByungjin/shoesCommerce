import React from "react";
import "./ProductDetailRight.scss";
import ProductRightSummary from "./ProductRightSummary";
import ProductRightColor from "./ProductRightColor";
import ProductRightSize from "./ProductRightSize";
import ProductRightEtc from "./ProductRightEtc";

class ProductDetailRight extends React.Component {
  render() {
    const { productInfo } = this.props;

    return (
      <section className="ProductDetailRight">
        <ProductRightSummary productInfo={productInfo} />
        <ProductRightColor productInfo={productInfo} />
        <ProductRightSize sizeList={productInfo.size_list} />
        <ProductRightEtc />
      </section>
    );
  }
}

export default ProductDetailRight;
