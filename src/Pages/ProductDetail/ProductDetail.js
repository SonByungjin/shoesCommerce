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
    this.state = {
      productId: "",
      productInfo: [],
    };
  }

  componentDidMount() {
    fetch(`http://10.58.5.250:8000/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.product_information) {
          this.setState({
            productId: this.props.match.params.id,
            productInfo: res["product_information"][0],
          });
        } else {
          console.log("제품 정보 가져오기 실패");
        }
      });
  }

  render() {
    const { productId, productInfo } = this.state;

    return (
      <>
        <PromoBanner />
        <Nav />
        <section className="ProductDetailContainer">
          <div className="ProductDetail">
            <nav></nav>
            <section className="ProductMain">
              <ProductDetailFeed productInfo={productInfo} />
              <ProductDetailRight
                productId={productId}
                productInfo={productInfo}
              />
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
