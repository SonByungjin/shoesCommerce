import React from "react";
import "./DashBoard5.scss";

class DashBoard5 extends React.Component {
  render() {
    return (
      <section className="dashBoard5">
        <div className="productMain">
          <h1>CONVERSE SHAPES</h1>
          <h2>
            모두를 위한 컨버스 셰입스. <br />
            정해진 기준에서 벗어나 나만의 방식으로 스타일링 하세요.
          </h2>
          <button>더 알아보기</button>
          <button>구매하기</button>
        </div>
        <a href="/main" className="productSub">
          <div className="top">
            <div className="topLeft"></div>
            <div className="topRight"></div>
          </div>
          <div className="bottom">
            <div className="bottomLeft"></div>
            <div className="bottomRight"></div>
          </div>
        </a>
      </section>
    );
  }
}

export default DashBoard5;
