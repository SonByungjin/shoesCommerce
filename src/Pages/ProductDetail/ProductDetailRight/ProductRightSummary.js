import React from "react";
import "./ProductRightSummary.scss";

class ProductRightSummary extends React.Component {
  render() {
    return (
      <section className="ProductRightSummary">
        <h1 className="productName">언타이틀드 라이벌</h1>
        <p className="productPrice">85,000원</p>
        <p className="productGender">남성</p>
        <p className="productShowDetails">
          선명하고 다양한 색채에 영감을 받은 컬러 블록과 리믹스된 고무 디테일
        </p>
        <button>더보기</button>
        <p className="productReview">VVVVV</p>
      </section>
    );
  }
}

export default ProductRightSummary;
