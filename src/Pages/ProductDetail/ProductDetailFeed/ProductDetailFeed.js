import React from "react";
import ProductMainImg from "./ProductMainImg";
import ProductDetailImg from "./ProductDetailImg";
import ProductReview from "./ProductReview";
import ProductCommunity from "./ProductCommunity";
import ProductInfo from "./ProductInfo";
import "./ProductDetailFeed.scss";

class ProductDetailFeed extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { productInfo } = this.props;

    return (
      <div className="ProductDetailFeed">
        <ProductMainImg productMainImage={productInfo.mainPic} />
        <ProductDetailImg />
        <ProductReview />
        <ProductCommunity />
        <ProductInfo />
      </div>
    );
  }
}

export default ProductDetailFeed;
