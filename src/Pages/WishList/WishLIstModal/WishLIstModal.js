import React, { Component } from "react";
import "./WishLIstModal.scss";

class WishLIstModal extends Component {
  render() {
    const { ImgIdx, children } = this.props;
    return (
      <div className={productModal ? "WishLIstModal" : "closeWishLIstModal"}>
        <div className="productPopup">
          <div className="productModal">
            <div className="productImgContainer">
              <img
                alt="heartImg"
                className="heartImg"
                src="/images/productList/heart_fill.png"
              />
              <img
                alt="productImg"
                className="productImg"
                src="https://image.converse.co.kr/cmsstatic/product/168636C_168636C_pdp-primary.jpg?gallery="
              />
            </div>
            <div className="productInfo">
              {/* <ProductDetailRight productInfo={productInfo} /> */}
              {children}
            </div>
            <div className="closeModal">
              <span onClick={this.productModalToggle}>x</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WishLIstModal;
