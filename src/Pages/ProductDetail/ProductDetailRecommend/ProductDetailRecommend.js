import React from "react";
import "./ProductDetailRecommend.scss";

class ProductDetailRecommend extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendProductList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/ProductDetail/RecommendMOCK.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recommendProductList: res.recommendItem,
        });
      });
  }

  render() {
    const { recommendProductList } = this.state;

    return (
      <section className="ProductDetailRecommend">
        <h1 className="title">추천상품</h1>
        <div className="ProductRecommend">
          <ul>
            {recommendProductList.map((product, index) => {
              return (
                <li key={index}>
                  <div className="picContainer">
                    <img
                      className="picBeforeHover"
                      alt="product before hover"
                      src={product.picture}
                    />
                    <img
                      className="picAfterHover"
                      alt="product after hover"
                      src={product.pictureHover}
                    />
                    <span
                      className={
                        product.isBestSeller
                          ? "isBestSeller"
                          : "isNotBestSeller"
                      }
                    >
                      BEST SELLER
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductDetailRecommend;
