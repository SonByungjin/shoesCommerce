import React from "react";
import "./CartRight.scss";

class CartRight extends React.Component {
  render() {
    return (
      <section className="CartRight">
        <section className="Order">
          <span>
            <h1>주문금액</h1>
          </span>
          <div className="OrderPrice"></div>
          <div className="OrderBtnContainer">
            <div className="OrderBtn">주문하기</div>
          </div>
        </section>
        <section className="PromoCodeContainer">
          <div className="PromoCodeMessage">
            고객님의 프로모션 코드를 지금 확인하세요!
          </div>
          <div className="PromoCode">
            <input className="PromoCodeInput" defaultValue="코드입력"></input>
            <button className="PromoCodeApply">적용</button>
          </div>
        </section>
        <section className="OrderInfo">
          <div className="OrderInfoOne">
            <div>이용안내</div>
          </div>
          <div className="OrderInfoTwo">
            <div>배송비 안내</div>
          </div>
        </section>
      </section>
    );
  }
}

export default CartRight;
