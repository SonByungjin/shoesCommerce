import React from "react";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import ProductDetailFeed from "./ProductDetailFeed/ProductDetailFeed";
import ProductDetailRight from "./ProductDetailRight/ProductDetailRight";
import ProductDetailRecommend from "./ProductDetailRecommend/ProductDetailRecommend";
import Footer from "../../Components/Footer/Footer";
import "./ProductDetail.scss";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = { productInfo: [] };
  }

  componentDidMount() {
    //추후 백엔드 데이터에 맞게 수정 (json 파일 뒤에 /productID 형식으로 받아올 예정)
    fetch(`http://localhost:3000/data/ProductDetail/ProductDetailMOCK.json`)
      .then((res) => res.json())
      .then((res) => {
        if (res.productItem[`${this.props.match.params.id}`]) {
          this.setState({
            productInfo: res.productItem[`${this.props.match.params.id}`],
          });
        } else {
          console.log("상품 아이디가 존재하지 않습니다");
          //에러 페이지로 이동
        }
      });
  }

  render() {
    const { productInfo } = this.state;

    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="ProductDetailContainer">
          <div className="ProductDetail">
            <nav></nav>
            <section className="ProductMain">
              <ProductDetailFeed productInfo={productInfo} />
              <ProductDetailRight productInfo={productInfo} />
            </section>
            <ProductDetailRecommend productInfo={productInfo} />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
