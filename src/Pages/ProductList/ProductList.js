import React from "react";
import FilterVerticalBar from "./Components/FilterVerticalBar/FilterVerticalBar";
import ProductContainer from "./Components/ProductContainer/ProductContainer";
import "./ProductList.scss";
import FilterHorizontalBar from "./Components/FilterHorizontalBar/FilterHorizontalBar";

export class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/ProductList/ProductList.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.productInfo,
        });
      });
  }

  render() {
    return (
      <div className="ProductList">
        <div className="PromoBanner">banner 컴포넌트 예정</div>
        <nav className="Nav">nav 컴포넌트 예정</nav>
        <header>
          <span className="shoesTitle">SHOES</span>
          <img
            alt="headerImges"
            src="https://image.converse.co.kr/cmsstatic/structured-content/15400/D-Converse-SP20-PWH-Best-Sellers-.jpg"
          />
        </header>
        <FilterHorizontalBar cnt={this.state.productInfo.length} />
        <div className="bottomOfPage">
          <FilterVerticalBar />
          <main className="ProductListMain">
            {this.state.productInfo.map((el) => (
              <ProductContainer
                id={el.id}
                src={el.src}
                name={el.name}
                price={el.price}
              />
            ))}
          </main>
        </div>
      </div>
    );
  }
}

export default ProductList;
