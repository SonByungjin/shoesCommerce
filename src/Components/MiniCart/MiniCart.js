import React from "react";
import { Link } from "react-router-dom";
import { secondAPI } from "../../Config";
import iconData from "./icon";
import "./MiniCart.scss";

class MiniCart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      miniCartData: [],
      totalCost: "",
      price: "",
      totalDiscountPrice: "",
    };
  }

  removeItemFromBasket(itemId) {
    const items = this.state.miniCartData.filter((item) => item.id !== itemId);

    this.setState({ miniCartData: items });
  }

  componentDidMount() {
    let totalCost = 0;
    let totalDiscountPrice = 0;
    //추후 백엔드 데이터에 맞게 수정 (json 파일 뒤에 /productID 형식으로 받아올 예정)
    fetch(`${secondAPI}/orders/cart`)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.miniCartData.length; i++) {
          totalCost += res.miniCartData[i].price * res.miniCartData[i].quantity;
          totalDiscountPrice +=
            res.miniCartData[i].price *
            (100 - res.miniCartData[i].discount_rate);
        }
        this.setState({
          miniCartData: res.miniCartData,
          totalCost: totalCost,
          totalDiscountPrice: totalDiscountPrice,
        });
      });
  }

  render() {
    const { miniCartData, totalCost, totalDiscountPrice } = this.state;

    return (
      <>
        <section className="miniCart">
          <div className="sectionMiniCart">
            <div
              className={
                this.props.openModal
                  ? "miniCartDrop"
                  : "miniCartDrop miniCartActive"
              }
            >
              <div className="miniCartHeader">
                <h2 className="headerItems">미니 장바구니</h2>
                <div className="headerActions">
                  <div className="miniCartLink">
                    <Link to="/cart">{iconData.cartIcon}</Link>
                  </div>
                  <button
                    className="miniCartClose"
                    onClick={this.props.closeModal}
                  >
                    {iconData.closeIcon}
                  </button>
                </div>
              </div>
              <div className="productContainer">
                {miniCartData?.map((product) => (
                  <div className="miniCartProduct" key={product.id}>
                    <div className="productMini">
                      <div
                        className="imgShoes"
                        title="루이 로페즈 프로 클래식 스웨이드"
                      >
                        <img
                          src={product.pic}
                          alt="루이 로페즈 프로 클래식 스웨이드"
                        ></img>
                      </div>
                    </div>
                    <div className="productMiniDetails">
                      <div className="productMiniName">
                        <span>{product.name}</span>
                      </div>
                      <div className="productMiniOptions">
                        <span>{product.color}/</span>
                        <span>{product.size}</span>
                        <span> {product.quantity}개</span>
                      </div>
                      <div className="productMiniPrice">
                        {!product.discount_rate && (
                          <span>{product.price.toLocaleString()}원 </span>
                        )}
                        {product.discount_rate && (
                          <span className="productSale">
                            {(
                              product.price *
                              ((100 - product.discount_rate) / 100)
                            ).toLocaleString()}
                            원
                          </span>
                        )}
                        {product.discount_rate && (
                          <span className="discountRate">
                            {product.discount_rate}%
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      className="removeBtn"
                      onClick={() => this.removeItemFromBasket(product.id)}
                    >
                      {iconData.closeIcon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="miniCartTotals">
                <div className="subTotals">
                  <div className="subTotalsCalc">
                    <span className="totalCost">총 상품금액</span>
                    <strong className="totalValue">
                      {totalCost.toLocaleString()} 원
                      {/* {totalDiscountPrice.toLocaleString()} */}
                    </strong>
                  </div>
                  <div className="subTotalsMsg">
                    <div className="deliveryText">
                      배송비 확인 및 프로모션 코드 사용은 주문서에서 가능합니다.
                    </div>
                  </div>
                </div>
                <div className="miniCartActions">
                  <button className="shopNow">바로구매</button>
                  <button className="goToCart">
                    <Link to="/cart">장바구니로 이동</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MiniCart;
