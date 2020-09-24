import React, { Component } from "react";
import "./ActiveSearchBar.scss";

class ActiveSearchBar extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      userInput: "",
    };
  }

  componentDidMount() {
    fetch("http://10.58.1.230:8000/products/search")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productData: res.products,
        });
      });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      userInput: value,
    });
  };

  render() {
    const { productData, userInput } = this.state;
    const { onSearchBar } = this.props;
    const { handleChange } = this;
    const productNames = productData.map((product) => {
      return product.name;
    });
    const filteredItems = productData.filter((item) => {
      return item.name.indexOf(userInput) !== -1;
    });
    const filteredItemsNames = filteredItems.map((item) => {
      return item.name;
    });
    const hybridAreaCondition =
      userInput.length >= 2 && productNames.join().includes(userInput);

    return (
      <div className={onSearchBar ? "activeSearchBar" : "inactiveSearchBar"}>
        <div className="container">
          <div className="dashBoard">
            <section className="content">
              <div className="productName">컨버스 셰입스</div>
              <video
                playsInline="playsinline"
                preload="auto"
                tabIndex="-1"
                role="application"
                loop=""
                muted="muted"
                autoPlay
                data-module-lazymedia="https://image.converse.co.kr/structured-content/15200/[SHANA]The Valdez x Converse Shapes 10s-9x16-r8.mp4"
                src="https://image.converse.co.kr/structured-content/15200/[SHANA]The Valdez x Converse Shapes 10s-9x16-r8.mp4"
              ></video>
            </section>
            <section className="content">
              <div className="top">
                <h1>베스트셀러</h1>
                <br />
                <svg id="icon-arrow" viewBox="0 0 46.7 36">
                  <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
                </svg>
                <h2>구매하기</h2>
              </div>
              <div className="bottom">
                <div className="productName">회원전용상품</div>
                <img
                  alt="memberOnlyProductImage"
                  src="https://image.converse.co.kr/cmsstatic/structured-content/15202/03_Search_02_Banner_352x185_02.jpg?gallery"
                />
              </div>
            </section>
            <section className="content">
              <div className="top">
                <h1>무엇을 도와드릴까요?</h1>
                <br />
                <svg id="icon-arrow" viewBox="0 0 46.7 36">
                  <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
                </svg>
                <h2>FAQ에서 궁금한 내용을 찾아보세요.</h2>
              </div>
              <div className="bottom">
                <div className="productName">척테일러 올스타 런웨이 케이블</div>
                <img
                  alt="allStarRunWayCableImage"
                  src="https://image.converse.co.kr/cmsstatic/structured-content/15204/03_Search_02_Banner_352x185_03.gif"
                />
              </div>
            </section>
            <section className="content">
              <div className="productName">올스타 BB EVO 라이벌</div>
              <img
                alt="allStarBbEvoRivalImage"
                src="https://image.converse.co.kr/cmsstatic/structured-content/15205/03_Search_01_Banner_352x370_04.jpg?gallery"
              />
            </section>
          </div>
          <div className="searchBar">
            <section className="searchArea">
              <h1>검색</h1>
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                onChange={handleChange}
              />
              <ul
                className={
                  userInput.length >= 2 &&
                  filteredItemsNames.join().includes(userInput)
                    ? "recommendWords"
                    : "hidden"
                }
              >
                {filteredItemsNames.slice(0, 4).map((product, index) => {
                  return <li key={index}>{product}</li>;
                })}
              </ul>
              <svg id="nav-search" viewBox="0 0 32 32">
                <path d="M19 0C11.8 0 6 5.8 6 13c0 3 1 5.7 2.7 7.9L.8 28.8l2.4 2.4 7.9-7.9C13.3 25 16 26 19 26c7.2 0 13-5.8 13-13S26.2 0 19 0zm0 22.5c-5.3 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5c5.3 0 9.5 4.3 9.5 9.5s-4.2 9.5-9.5 9.5z"></path>
              </svg>
            </section>
            <section className="hybridArea">
              <div
                className={
                  hybridAreaCondition ? "hidden" : "popularSearchWords"
                }
              >
                <h1>인기 검색어</h1>
                <ul>
                  <li>척테일러</li>
                  <li>잭퍼셀</li>
                  <li>척 70</li>
                  <li>셰입스</li>
                </ul>
              </div>
              <div className={hybridAreaCondition ? "searchResults" : "hidden"}>
                <h1>추천 상품</h1>
                <ul>
                  {filteredItems.slice(0, 4).map((product) => {
                    return (
                      <li key={product.id}>
                        <img alt={product.name} src={product.image} />
                        <div className="name">{product.name}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveSearchBar;
