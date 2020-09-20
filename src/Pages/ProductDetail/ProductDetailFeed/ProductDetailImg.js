import React from "react";
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
    return (
      <div className="ProductDetailImg">
        <section className="ProductDetailImgInfo">
          <h1>언타이틀드 라이벌</h1>
          <p>
            클래식하면서도 완벽한 디테일이 독창적 디자인인 반면에 유선형의 스타
            앵클 패치나 외음매가 돋보이는 미드솔 같은 미묘한 변화는 눈에
            두드러지게 나타납니다.
          </p>
          <p>*캔바스 하이탑 스니커즈</p>
          <p>*충격 완충을 위한 스마트폼 인솔</p>
          <p>*측면 고무 미드솔 및 토우 범퍼</p>
          <p>*다양한 색상에서 영감을 받은 컬러 블록 디자인</p>
          <p>*디컷 스타 패치</p>
        </section>
        <section className="ProductDetailImgPic">
          <img
            className={this.state.isClosed ? "imgClosed" : "imgOpened"}
            alt="Product DetailedImg"
            src="https://image.converse.co.kr/cmsstatic/product/27750/168636C.jpg"
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