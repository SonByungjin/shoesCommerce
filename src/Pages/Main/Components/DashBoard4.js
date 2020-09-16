import React from "react";
import "./DashBoard4.scss";

class DashBoard4 extends React.Component {
  render() {
    return (
      <section className="dashBoard4">
        <div className="productSub">
          <div className="top">
            <div className="status"></div>
            <h1>UNT1TL3D RIVALS</h1>
            <h2>
              과감한 컬러블록 디자인과 리믹스 러버 디테일로 완성된 <br />
              언타이틀드 라이블을 만나보세요
            </h2>
            <button>구매하기</button>
          </div>
          <a href="/main" className="bottom">
            <div className="bottomLeft"></div>
            <div className="bottomRight"></div>
          </a>
        </div>
        <div className="productMain"></div>
      </section>
    );
  }
}

export default DashBoard4;
