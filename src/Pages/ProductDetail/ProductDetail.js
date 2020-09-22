import React from "react";
import { withRouter } from "react-router-dom";
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
    // fetch(`http://localhost:3000/data/ProductDetail/ProductDetailMOCK.json`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.productItem[`${this.props.match.params.id}`]) {
    //       this.setState({
    //         productInfo: res.productItem[`${this.props.match.params.id}`],
    //       });
    //     } else {
    //       console.log("상품 아이디가 존재하지 않습니다");
    //       //에러 페이지로 이동
    //     }
    //   });
    fetch(`http://10.58.5.117:8000/product/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res["product_information"]) {
          this.setState({ productInfo: res["product_information"][0] });
        } else {
          console.log("제품 정보 가져오기 실패");
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

export default withRouter(ProductDetail);
