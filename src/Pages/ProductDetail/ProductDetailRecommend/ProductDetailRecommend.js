import React from "react";
import "./ProductDetailRecommend.scss";

class ProductDetailRecommend extends React.Component {
  // componentDidMount() {
  //   fetch("http://localhost:3000/data/ProductDetail/RecommendMOCK.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         recommendProductList: res.recommendItem,
  //       });
  //     });
  // }

  render() {
    const { productInfo } = this.props;
    console.log(productInfo);
    console.log(productInfo.recommended_product);

    return (
      <section className="ProductDetailRecommend">
        <h1 className="title">추천상품</h1>
        <div className="ProductRecommend">
          <ul>
            {productInfo.recommended_products?.map((product) => {
              return (
                <li key={product.serial_number}>
                  <div className="picContainer">
                    <img
                      className="picBeforeHover"
                      alt="product before hover"
                      src={product.main_image}
                    />
                    <img
                      className="picAfterHover"
                      alt="product after hover"
                      src={product.hover_image}
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
