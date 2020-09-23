import React from "react";
import "./CartMainItem.scss";

class CartMainItem extends React.Component {
  render() {
    const { cartItem } = this.props;

    return (
      <section className="cartMainItem">
        <div className="cartMainItemPic">
          <img alt="cartMainItemPic" src={cartItem.mainPic}></img>
        </div>
        <div className="cartMainItemInfoContainer">
          <div className="cartMainItemInfo">
            <div className="cartMainItemName">{cartItem.series_name}</div>
            <div className="cartMainItemDetailContainer">
              <span>
                {cartItem.color} / {cartItem.size}
              </span>
              <span>수량 : {cartItem.quantity}</span>
            </div>
            <div className="cartMainItemDetailContainerTwo">
              <span className="wishListDelete">위시리스트 삭제</span>
              <span className="buyLater">나중에 구매하기</span>
            </div>
          </div>
          <div className="cartMainItemPrice">
            <div className="cartMainItemPriceContainerOne">
              <span className="originalPrice">
                {cartItem.originalPrice.toLocaleString()} 원
              </span>
              <span className="discountPrice">
                {cartItem.originalPrice * (cartItem.discount_rate / 100)} 원
              </span>
              <span className="discountRatio">{cartItem.discount_rate}%</span>
            </div>
            <div className="cartMainItemPriceContainerTwo"></div>
            <div className="cartMainItemPriceContainerThree">
              <span className="optionChange">옵션변경</span>
              <span className="delete">삭제</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CartMainItem;
