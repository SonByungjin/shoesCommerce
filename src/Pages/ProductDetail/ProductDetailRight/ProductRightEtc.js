import React from "react";
import "./ProductRightEtc.scss";

class ProductRightEtc extends React.Component {
  render() {
    return (
      <section className="ProductRightEtc">
        <div className="shareIcons">
          <ul>
            <li>
              <img src="https://www.vhv.rs/dpng/d/41-417248_share-button-icon-png-transparent-png.png" />
            </li>
            <li>
              <img src="https://www.vhv.rs/dpng/d/41-417248_share-button-icon-png-transparent-png.png" />
            </li>
            <li>
              <img src="https://www.vhv.rs/dpng/d/41-417248_share-button-icon-png-transparent-png.png" />
            </li>
          </ul>
        </div>
        <div className="freeShippingBtn">
          <p>5만원이상 구매시 무료배송</p>
        </div>
        <div className="shippingInfo">
          <p>배송정보</p>
          <p>교환반품</p>
        </div>
      </section>
    );
  }
}

export default ProductRightEtc;
