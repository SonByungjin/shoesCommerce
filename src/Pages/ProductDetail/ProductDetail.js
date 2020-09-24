import React from "react";
import { withRouter } from "react-router-dom";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import ProductDetailFeed from "./ProductDetailFeed/ProductDetailFeed";
import ProductDetailRight from "./ProductDetailRight/ProductDetailRight";
import ProductDetailRecommend from "./ProductDetailRecommend/ProductDetailRecommend";
import Footer from "../../Components/Footer/Footer";
import "./ProductDetail.scss";
import { secondAPI } from "../../Config";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = { productInfo: [] };
  }

  componentDidMount() {
    fetch(`${secondAPI}/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.product_information) {
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
