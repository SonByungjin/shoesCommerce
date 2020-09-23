import React from "react";
import { Link } from "react-router-dom";
import "./MiniCart.scss";

class MiniCart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      miniCartData: [],
      isModalOpen: false,
      totalCost: "",
      price: "",
      totalDiscountPrice: "",
    };
  }

  removeItemFromBasket(itemId) {
    const items = this.state.miniCartData.filter((item) => item.id !== itemId);

    this.setState({ miniCartData: items });
  }
  // componentDidUpdate() {
  //   const items = this.state.miniCartData.filter((item) => item.id !== itemId);

  //   this.setState({ miniCartData: items });
  // }

  componentDidMount() {
    this.setState({
      miniCartData: [],
    });
    let totalCost = 0;
    let totalDiscountPrice = 0;
    //추후 백엔드 데이터에 맞게 수정 (json 파일 뒤에 /productID 형식으로 받아올 예정)
    fetch(`http://localhost:3000/data/MiniCart/MiniCartProduct.json`)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.miniCartData.length; i++) {
          totalCost += res.miniCartData[i].price * res.miniCartData[i].quantity;
          totalDiscountPrice +=
            res.miniCartData[i].price * res.miniCartData[i].discount_rate;
        }
        console.log(totalDiscountPrice);
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
              className="miniCartDrop"
              // isOpen={this.state.isModalOpen}
              // close={this.closeModal}
            >
              <div className="miniCartHeader">
                <h2 className="headerItems">미니 장바구니</h2>
                <div className="headerActions">
                  <div className="miniCartLink">
                    <Link to="/cart">
                      <svg id="nav-cart" viewBox="0 0 41 35">
                        <g fillRule="evenodd">
                          <path d="M0 0v3.4h5.836l6.098 23.448H34.94L40.528 5.46H9.866L8.478 0H0zm10.746 8.86h25.382l-3.814 14.588H14.56L10.746 8.86zM12.956 31.449l.79 3.4h6.002v-3.4zM27.124 31.449v3.4h6.002l.776-3.4z"></path>
                        </g>
                      </svg>
                    </Link>
                  </div>
                  <button className="miniCartClose">
                    <svg id="icon-close" viewBox="0 0 37 37">
                      <path
                        fillRule="nonzero"
                        d="M36.533 3.533L33 0 18.267 14.733 3.533 0 0 3.533l14.733 14.734L0 33l3.533 3.533L18.267 21.8 33 36.533 36.533 33 21.8 18.267z"
                      ></path>
                    </svg>
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
                      <svg id="icon-close" viewBox="0 0 37 37">
                        <path
                          fillRule="nonzero"
                          d="M36.533 3.533L33 0 18.267 14.733 3.533 0 0 3.533l14.733 14.734L0 33l3.533 3.533L18.267 21.8 33 36.533 36.533 33 21.8 18.267z"
                        ></path>
                      </svg>
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
        <button onClick={this.openModal}>ADD TO CART</button>
      </>
    );
  }
}

export default MiniCart;
