import React from "react";
import "./ProductReview.scss";

class ProductReview extends React.Component {
  render() {
    return (
      <div className="ProductReview">
        <h1>REVIEW(0)</h1>
        <section className="reviewContainer">
          <h1>0개의 상품 리뷰가 있습니다.</h1>
          <p>이 상품의 첫번째 리뷰를 작성해보세요.</p>
          <button>리뷰쓰기</button>
        </section>
      </div>
    );
  }
}

export default ProductReview;
