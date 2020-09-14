import React from "react";
import ProductMainImg from "./ProductMainImg";
import ProductDetailImg from "./ProductDetailImg";
import ProductReview from "./ProductReview";
import ProductCommunity from "./ProductCommunity";
import ProductInfo from "./ProductInfo";
import "./ProductDetailFeed.scss";

class ProductDetailFeed extends React.Component {
  render() {
    return (
      <div className="ProductDetailFeed">
        <ProductMainImg />
        <ProductDetailImg />
        <ProductReview />
        <ProductCommunity />
        <ProductInfo />
      </div>
    );
  }
}

export default ProductDetailFeed;
