import React from "react";
import "./CartMainItem.scss";

class CartMainItem extends React.Component {
  render() {
    return (
      <section className="CartMainItem">
        <div className="CartMainItemPic">
          <img
            alt="CartMainItemPic"
            src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_primary.jpg?browse"
          ></img>
        </div>
        <div className="CartMainItemInfoContainer">
          <div className="CartMainItemInfo">
            <div className="CartMainItemName">언타이틀드 라이벌</div>
            <div className="CartMainItemDetailContainer">
              <span>화이트 / 270</span>
              <span>수량 : 2</span>
            </div>
            <div className="CartMainItemDetailContainerTwo">
              <span className="WishListDelete">위시리스트 삭제</span>
              <span className="BuyLater">나중에 구매하기</span>
            </div>
          </div>
          <div className="CartMainItemPrice">
            <div className="CartMainItemPriceContainerOne">
              <span className="OriginalPrice">85,000 원</span>
              <span className="DiscountPrice">59,500 원</span>
              <span className="DiscountRatio">30%</span>
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
