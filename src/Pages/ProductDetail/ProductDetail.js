import React from "react";
import ProductDetailFeed from "./ProductDetailFeed/ProductDetailFeed";
import ProductDetailRight from "./ProductDetailRight/ProductDetailRight";
import ProductDetailRecommend from "./ProductDetailRecommend/ProductDetailRecommend";
import "./ProductDetail.scss";

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="ProductDetail">
        <nav></nav>
        <section className="ProductMain">
          <ProductDetailFeed />
          <ProductDetailRight />
        </section>
        <ProductDetailRecommend />
      </div>
    );
  }
}

export default ProductDetail;
