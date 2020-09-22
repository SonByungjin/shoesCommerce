import React from "react";
import { withRouter } from "react-router-dom";
import FilterVerticalBar from "./Components/FilterVerticalBar/FilterVerticalBar";
import ProductContainer from "./Components/ProductContainer/ProductContainer";
import FilterHorizontalBar from "./Components/FilterHorizontalBar/FilterHorizontalBar";
import Footer from "../../Components/Footer/Footer";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import "./ProductList.scss";

export class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      wholeProducts: [],
      products: [],
      hideFilterVaild: false,
      loadingStatus: false,
      ProductMainImage: { MainImg: [] },
    };
  }

  handleFilter = () => {
    this.setState({
      hideFilterVaild: !this.state.hideFilterVaild,
    });
  };

  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      this.pagination();
    }
  };

  pagination = () => {
    if (this.state.wholeProducts.length > this.state.products.length) {
      this.setState(
        {
          loadingStatus: !this.state.loadingStatus,
        },
        () => {
          let result = this.state.wholeProducts.slice(
            this.state.products.length,
            this.state.products.length + 14
          );

          setTimeout(
            () =>
              this.setState(
                {
                  loadingStatus: !this.state.loadingStatus,
                },
                () => {
                  this.setState({
                    products: [...this.state.products, ...result],
                  });
                }
              ),
            1000
          );
          window.addEventListener("scroll", this.infiniteScroll);
        }
      );
    }
  };

  handleItemCount = () => {
    this.setState(
      {
        loadingStatus: !this.state.loadingStatus,
      },
      () => {
        // fetch("/data/ProductList/Products.json")
        fetch(`http://10.58.1.173:8000/products?sub_category_id=${1}`)
          .then((res) => res.json())
          .then((res) => {
            // 무한스크롤 기능 확인을 위한 임의 함수
            let result = res.products.slice(
              this.state.products.length,
              this.state.products.length + 14
            );

            // let result = res.products;
            setTimeout(
              () =>
                this.setState(
                  {
                    loadingStatus: !this.state.loadingStatus,
                  },
                  () => {
                    this.setState({
                      wholeProducts: res.products,
                      products: [...this.state.products, ...result],
                    });
                  }
                ),
              1000
            );
            window.addEventListener("scroll", this.infiniteScroll);
          });
      }
    );
  };

  fixedImage = (colorEl, pdIdx) => {
    let updateProductMainImage = this.state.ProductMainImage;
    updateProductMainImage.MainImg[pdIdx].mainId = colorEl.id;
    updateProductMainImage.MainImg[pdIdx].ImgUrl = colorEl.image_url;
    this.setState({
      ProductMainImage: updateProductMainImage,
    });
  };

  DynamicRouting = () => {
    console.log(this.props.history);
    console.log(this.props.location);
    console.log(this.props.match);
  };

  componentDidMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
    this.handleItemCount();
  }

  render() {
    const {
      wholeProducts,
      products,
      hideFilterVaild,
      loadingStatus,
      ProductMainImage,
    } = this.state;
    return (
      <div className="ProductList">
        <div
          className={
            loadingStatus ? "loadingImageValid" : "loadingImageUnvalid"
          }
        >
          <img alt="loadingImg" src="/images/productList/preloader.gif" />
        </div>
        <PromoBanner />
        <Nav />
        <header>
          <span className="shoesTitle">SHOES</span>
          <img
            alt="headerImges"
            src="https://image.converse.co.kr/cmsstatic/structured-content/15400/D-Converse-SP20-PWH-Best-Sellers-.jpg"
          />
        </header>
        <FilterHorizontalBar
          hideFilterValid={hideFilterVaild}
          handleFilter={this.handleFilter}
          cnt={wholeProducts.length}
        />
        <div className="bottomOfPage">
          <div
            className={
              hideFilterVaild
                ? "hideVerticalFilterValild"
                : "hideVerticalFilterUnvalild"
            }
          >
            <FilterVerticalBar />
          </div>
          <main
            className={
              hideFilterVaild ? "HideProductListMain" : "ProductListMain"
            }
          >
            {products.length > 0 &&
              products.map((product, pdIdx) => {
                const {
                  id,
                  image_url,
                  series_name,
                  price,
                } = product.main_image;
                const { color_image } = product;
                ProductMainImage.MainImg.push({
                  idx: pdIdx,
                  mainId: id,
                  ImgUrl: image_url,
                });
                return (
                  <ProductContainer
                    key={pdIdx}
                    hideFilterValid={hideFilterVaild}
                    mainId={id}
                    imgUrl={ProductMainImage.MainImg[pdIdx].ImgUrl}
                    name={series_name}
                    price={price}
                    colorList={color_image}
                    fixedImage={(colorEl) => this.fixedImage(colorEl, pdIdx)}
                    DynamicRouting={this.DynamicRouting}
                  />
                );
              })}
          </main>
        </div>
        {/* <footer>footer 컴포넌트 예정</footer> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(ProductList);
