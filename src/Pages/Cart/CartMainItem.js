import React from "react";
import "./CartMainItem.scss";

class CartMainItem extends React.Component {
  render() {
    const { cartItem } = this.props;
    console.log(cartItem);

    return (
      <section className="CartMainItem">
        <div className="CartMainItemPic">
          <img alt="CartMainItemPic" src={cartItem.mainPic}></img>
        </div>
        <div className="CartMainItemInfoContainer">
          <div className="CartMainItemInfo">
            <div className="CartMainItemName">{cartItem.series_name}</div>
            <div className="CartMainItemDetailContainer">
              <span>
                {cartItem.color} / {cartItem.size}
              </span>
              <span>수량 : {cartItem.quantity}</span>
            </div>
            <div className="CartMainItemDetailContainerTwo">
              <span className="WishListDelete">위시리스트 삭제</span>
              <span className="BuyLater">나중에 구매하기</span>
            </div>
          </div>
          <div className="CartMainItemPrice">
            <div className="CartMainItemPriceContainerOne">
              <span className="OriginalPrice">
                {cartItem.originalPrice.toLocaleString()} 원
              </span>
              <span className="DiscountPrice">
                {cartItem.originalPrice * (cartItem.discount_rate / 100)} 원
              </span>
              <span className="DiscountRatio">{cartItem.discount_rate}%</span>
            </div>
            <div className="CartMainItemPriceContainerTwo"></div>
            <div className="CartMainItemPriceContainerThree">
              <span className="OptionChange">옵션변경</span>
              <span className="Delete">삭제</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CartMainItem;
