import React from "react";
import "./MiniCart.scss";

class MiniCart extends React.Component {
  render() {
    return (
      <>
        <div className="miniCart">
          <div className="sectionMiniCart">
            <div className="miniCartDrop">
              <div className="miniCartHeader">
                <h2 className="headerItems">미니 장바구니</h2>
                <div className="headerActions">
                  <div className="miniCartLink">
                    <svg id="nav-cart" viewBox="0 0 41 35">
                      <g fill-rule="evenodd">
                        <path d="M0 0v3.4h5.836l6.098 23.448H34.94L40.528 5.46H9.866L8.478 0H0zm10.746 8.86h25.382l-3.814 14.588H14.56L10.746 8.86zM12.956 31.449l.79 3.4h6.002v-3.4zM27.124 31.449v3.4h6.002l.776-3.4z"></path>
                      </g>
                    </svg>
                  </div>
                  <button className="miniCartClose">
                    <svg id="icon-close" viewBox="0 0 37 37">
                      <path
                        fill-rule="nonzero"
                        d="M36.533 3.533L33 0 18.267 14.733 3.533 0 0 3.533l14.733 14.734L0 33l3.533 3.533L18.267 21.8 33 36.533 36.533 33 21.8 18.267z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="miniCartProducts">
                <div className="productMini">
                  <a
                    className="imgShoes"
                    title="루이 로페즈 프로 클래식 스웨이드"
                  >
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/169492C_169492C_primary.jpg?browse"
                      alt="루이 로페즈 프로 클래식 스웨이드"
                    ></img>
                  </a>
                </div>
                <div className="productMiniDetails">
                  <div className="productMiniName">
                    <span>루이 로페즈 프로 클래식 스웨이드</span>
                  </div>
                  <div className="productMiniOptions">
                    <span>레이크사이드블루/240 1개</span>
                  </div>
                  <div className="productMiniPrice">
                    <span>79,000원</span>
                  </div>
                </div>
              </div>
              <div className="miniCartProducts">
                <div className="productMini">
                  <a
                    className="imgShoes"
                    title="루이 로페즈 프로 클래식 스웨이드"
                  >
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/169492C_169492C_primary.jpg?browse"
                      alt="루이 로페즈 프로 클래식 스웨이드"
                    ></img>
                  </a>
                </div>
                <div className="productMiniDetails">
                  <div className="productMiniName">
                    <span>루이 로페즈 프로 클래식 스웨이드</span>
                  </div>
                  <div className="productMiniOptions">
                    <span>레이크사이드블루/240 1개</span>
                  </div>
                  <div className="productMiniPrice">
                    <span>79,000원</span>
                  </div>
                </div>
              </div>
              <div className="miniCartProducts">
                <div className="productMini">
                  <a
                    className="imgShoes"
                    title="루이 로페즈 프로 클래식 스웨이드"
                  >
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/169492C_169492C_primary.jpg?browse"
                      alt="루이 로페즈 프로 클래식 스웨이드"
                    ></img>
                  </a>
                </div>
                <div className="productMiniDetails">
                  <div className="productMiniName">
                    <span>루이 로페즈 프로 클래식 스웨이드</span>
                  </div>
                  <div className="productMiniOptions">
                    <span>레이크사이드블루/240 1개</span>
                  </div>
                  <div className="productMiniPrice">
                    <span>79,000원</span>
                  </div>
                </div>
              </div>
              <div className="miniCartProducts">
                <div className="productMini">
                  <a
                    className="imgShoes"
                    title="루이 로페즈 프로 클래식 스웨이드"
                  >
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/169492C_169492C_primary.jpg?browse"
                      alt="루이 로페즈 프로 클래식 스웨이드"
                    ></img>
                  </a>
                </div>
                <div className="productMiniDetails">
                  <div className="productMiniName">
                    <span>루이 로페즈 프로 클래식 스웨이드</span>
                  </div>
                  <div className="productMiniOptions">
                    <span>레이크사이드블루/240 1개</span>
                  </div>
                  <div className="productMiniPrice">
                    <span>79,000원</span>
                  </div>
                </div>
              </div>
              <div className="miniCartTotals">
                <div className="subTotals">
                  <div className="subTotalsCalc">
                    <span className="totalCost">총 상품금액</span>
                    <strong className="totalValue">395,500 원</strong>
                  </div>
                  <div className="subTotalsMsg">
                    <div className="deliveryText">
                      배송비 확인 및 프로모션 코드 사용은 주문서에서 가능합니다.
                    </div>
                  </div>
                </div>
                <div className="miniCartActions">
                  <button className="shopNow">바로구매</button>
                  <button className="goToCart">장바구니로 이동</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button goToCart={this.goToCart}>누를때 미니 장바구니 작동</button>
      </>
    );
  }
}

export default MiniCart;
