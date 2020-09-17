import React from "react";
import FilterVerticalBar from "./Components/FilterVerticalBar/FilterVerticalBar";
import ProductContainer from "./Components/ProductContainer/ProductContainer";
import "./ProductList.scss";
import FilterHorizontalBar from "./Components/FilterHorizontalBar/FilterHorizontalBar";

export class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      hideFilterVaild: false,
      preItems: 0,
      items: 14,
      loadingStatus: false,
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
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 14,
      });
      this.componentDidMount();
    }
  };

  componentDidMount() {
    this.setState(
      {
        loadingStatus: !this.state.loadingStatus,
      },
      () => {
        fetch("/data/ProductList/Products.json")
          .then((res) => res.json())
          .then((res) => {
            // 무한스크롤 기능 확인을 위한 임의 함수
            let result = res.products.slice(
              this.state.preItems,
              this.state.items
            );

            setTimeout(
              () =>
                this.setState(
                  {
                    loadingStatus: !this.state.loadingStatus,
                  },
                  () => {
                    this.setState({
                      products: this.state.products.concat(result),
                    });
                  }
                ),
              1000
            );

            // 실제 데이터 받아오는 함수
            // this.setState({
            //   products: this.state.products.concat(res.products)
            // })

            window.addEventListener("scroll", this.infiniteScroll);
          });
      }
    );
  }

  render() {
    const { products, hideFilterVaild, loadingStatus } = this.state;
    return (
      <div className="ProductList">
        <div
          // className="loadingImage"
          className={
            loadingStatus ? "loadingImageValid" : "loadingImageUnvalid"
          }
        >
          <img src="/images/productList/preloader.gif" />
        </div>

        <div className="PromoBanner">banner 컴포넌트 예정</div>
        <nav className="Nav">nav 컴포넌트 예정</nav>
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
          cnt={products.length}
        />
        <div className="bottomOfPage">
          <div
            // className="hideVerticalFilterUnvalid"
            className={
              hideFilterVaild
                ? "hideVerticalFilterValild"
                : "hideVerticalFilterUnvalild"
            }
          >
            <FilterVerticalBar />
          </div>
          <main
            className="ProductListMain"
            className={
              hideFilterVaild ? "HideProductListMain" : "ProductListMain"
            }
          >
            {products.map((product) => {
              const { id, src, name, price } = product;
              return (
                <ProductContainer
                  hideFilterValid={hideFilterVaild}
                  id={id}
                  src={src}
                  name={name}
                  price={price}
                />
              );
            })}
          </main>
        </div>
        <footer>footer 컴포넌트 예정</footer>
      </div>
    );
  }
}

export default ProductList;
