import React from "react";
import "./ProductDetailRight.scss";
import ProductRightSummary from "./ProductRightSummary";
import ProductRightColor from "./ProductRightColor";
import ProductRightSize from "./ProductRightSize";
import ProductRightEtc from "./ProductRightEtc";

class ProductDetailRight extends React.Component {
  render() {
    return (
      <section className="ProductDetailRight">
        <ProductRightSummary />
        <ProductRightColor />
        <ProductRightSize />
        <ProductRightEtc />
      </section>
    );
  }
}

export default ProductDetailRight;
