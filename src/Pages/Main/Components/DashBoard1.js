import React from "react";
import "./DashBoard1.scss";

class DashBoard1 extends React.Component {
  render() {
    return (
      <section className="dashBoard1">
        <div className="productSub">
          <div className="top">
            <div className="status">NOW AVAILABLE</div>
            <h1>CHUCK 70 GORE-TEX</h1>
            <h2>
              프리미엄 척 70에 뛰어난 방수기능을 더한 <br />척 70 고어텍스를
              경험해보세요
            </h2>
            <a href="/main">
              <svg id="icon-arrow" viewBox="0 0 46.7 36">
                <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
              </svg>
              구매하기
            </a>
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

export default DashBoard1;
