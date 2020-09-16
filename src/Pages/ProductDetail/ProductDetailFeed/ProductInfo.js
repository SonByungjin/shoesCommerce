import React from "react";
import "./ProductInfo.scss";

class ProductInfo extends React.Component {
  render() {
    return (
      <section className="ProductInfo">
        <h1>상품정보</h1>
        <section className="detailInfo">
          <dl>
            <dt>Model</dt>
            <dd>168635C</dd>
            <dt>제품소개</dt>
            <dd>168635C</dd>
            <dt>색상</dt>
            <dd>168635C</dd>
            <dt>치수</dt>
            <dd>168635C</dd>
            <dt>제조자</dt>
            <dd>168635C</dd>
            <dt>제조국</dt>
            <dd>168635C</dd>
            <dt>취급시 주의사항</dt>
            <dd>168635C</dd>
            <dt>퓸질보증기준</dt>
            <dd>168635C</dd>
            <dt>A/S 책임자와 전화번호</dt>
            <dd>168635C</dd>
            <dt>제조연월</dt>
            <dd>168635C</dd>
          </dl>
        </section>
      </section>
    );
  }
}

export default ProductInfo;
