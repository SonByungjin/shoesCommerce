import React from "react";
import ProductCommunity from "./ProductCommunity";
import "./ProductDetailImg.scss";

class ProductDetailImg extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosed: true,
    };
  }

  handleClick = () => {
    const { isClosed } = this.state;
    this.setState({
      isClosed: !isClosed,
    });
  };

  render() {
    const { productInfo } = this.props;

    return (
      <div className="ProductDetailImg">
        <section className="ProductDetailImgInfo">
          <h1>{productInfo.series_name}</h1>
          <p>{productInfo.detail_description}</p>
          <p>{productInfo.features}</p>
          <p>*충격 완충을 위한 스마트폼 인솔</p>
          <p>*측면 고무 미드솔 및 토우 범퍼</p>
          <p>*다양한 색상에서 영감을 받은 컬러 블록 디자인</p>
          <p>*디컷 스타 패치</p>
        </section>
        <section className="ProductDetailImgPic">
          <img
            className={this.state.isClosed ? "imgClosed" : "imgOpened"}
            alt="Product DetailedImg"
            src={productInfo.series_image}
          />
        </section>
        <span className="showMore" onClick={this.handleClick}>
          {this.state.isClosed ? "더보기 +" : "닫기 -"}
        </span>
      </div>
    );
  }
}

export default ProductDetailImg;
