import React, { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import WishProduct from "./WishProduct/WishProduct";
import ProfileImg from "./ProfileImg";
import ProductDetailRight from "../ProductDetail/ProductDetailRight/ProductDetailRight";
import ProductDetailFeed from "../ProductDetail/ProductDetailFeed/ProductDetailFeed";
import "./WishList.scss";

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      wishlist: [],
      productModal: false,
    };
  }

  componentDidMount() {
    this.getWishList();
  }

  getWishList = () => {
    fetch(
      "/data/ProductList/wishlist.json",
      // "http://10.58.5.117:8000/false_account/wishlist"
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          wishlist: res.wishlist,
        });
      });
  };

  productModalToggle = () => {
    this.setState({
      productModal: !this.state.productModal,
    });
  };

  render() {
    const { wishlist, productModal } = this.state;
    return (
      <div className="WishList">
        <PromoBanner />
        <Nav />
        <div
          className={
            productModal ? "productModalWrapper" : "closeProductModalWrapper"
          }
        >
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
                <ProductDetailRight />
              </div>
              <div className="closeModal">
                <span onClick={this.productModalToggle}>x</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wishlistMain">
          <div className="userInfo">
            <div className="userName">
              <ProfileImg className="UserIcon" />
              <span>아무개 고객님</span>
            </div>
            <ul className="shoppingInfo">
              <li className="subTitle">쇼핑 정보</li>
              <li>주문/배송 조회</li>
              <li>교환/반품 신청</li>
              <li>교환/반품 조회</li>
              <li>입고 알림 신청 내역</li>
            </ul>
            <ul className="activityInfo">
              <li className="subTitle">활동 정보</li>
              <li>드로우 내역</li>
              <li>프로모션 코드 조회</li>
              <li>상품 리뷰</li>
              <li>위시리스트</li>
              <li>1:1 문의</li>
            </ul>
            <ul className="privateInfo">
              <li className="subTitle">나의 정보</li>
              <li>배송지 관리</li>
              <li>회원 정보 수정</li>
              <li>비밀번호 변경</li>
              <li>회원 탈퇴</li>
            </ul>
            <div className="logout">
              <span>로그아웃</span>
            </div>
          </div>
          <div className="wishProductList">
            <p>위시리스트</p>
            <div className="wishProductListMain">
              {wishlist.map((wishProduct) => {
                const {
                  main_image,
                  price,
                  serial_number,
                  series_name,
                } = wishProduct;
                return (
                  <WishProduct
                    imgUrl={main_image}
                    price={price}
                    id={serial_number}
                    name={series_name}
                    productModal={this.productModalToggle}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WishList;
