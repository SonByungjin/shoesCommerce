import React from "react";
import "./CartMain.scss";

class CartMain extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCount: 3,
    };
  }

  render() {
    return (
      <section className="CartMain">
        <div className="CartMainTitle">
          <h1>{`장바구니 (${this.state.itemCount})`}</h1>
        </div>
        <div className="CartMainMessage">
          <span>
            신규 회원 가입 시, 즉시 사용 가능한 1만원 할인 코드 발급해드립니다.
            (*5만원 이상 결제 시)
          </span>
        </div>
      </section>
    );
  }
}

export default CartMain;
