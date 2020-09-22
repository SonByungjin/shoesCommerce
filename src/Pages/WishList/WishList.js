import React, { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import WishProduct from "./WishProduct/WishProduct";
import "./WishList.scss";

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      wishlist: [],
    };
  }

  componentDidMount() {
    // fetch("/data/ProductList/wishlist.json")
    fetch("http://10.58.5.117:8000/false_account/wishlist", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          wishlist: res.wishlist,
        });
      });
  }

  render() {
    const { wishlist } = this.state;
    return (
      <div className="WishList">
        <PromoBanner />
        <Nav />
        <div className="wishlistMain">
          <div className="userInfo">
            <div className="userName">
              <svg className="userIcon" id="nav-profile" viewBox="0 0 32 30">
                <path d="M16 3.8c3.6 0 6.6 3 6.6 6.6S19.6 17 16 17s-6.6-3-6.6-6.6 3-6.6 6.6-6.6M6 10.4c0 3.7 2.1 6.9 5.1 8.6-4.9 1.6-9 5.4-10.7 10.5h3.7c2.1-4.7 6.7-7.9 11.9-7.9s9.9 3.1 11.9 7.9h3.7c-1.7-5.1-5.7-8.9-10.7-10.5 3-1.7 5.1-4.9 5.1-8.6 0-5.5-4.5-10-10-10S6 4.9 6 10.4"></path>
              </svg>
              <span>아무개 고객님</span>
            </div>
            <div className="shoppingInfo">
              <p className="subTitle">쇼핑 정보</p>
              <p>주문/배송 조회</p>
              <p>교환/반품 신청</p>
              <p>교환/반품 조회</p>
              <p>입고 알림 신청 내역</p>
            </div>
            <div className="activityInfo">
              <p className="subTitle">활동 정보</p>
              <p>드로우 내역</p>
              <p>프로모션 코드 조회</p>
              <p>상품 리뷰</p>
              <p>위시리스트</p>
              <p>1:1 문의</p>
            </div>
            <div className="privateInfo">
              <p className="subTitle">나의 정보</p>
              <p>배송지 관리</p>
              <p>회원 정보 수정</p>
              <p>비밀번호 변경</p>
              <p>회원 탈퇴</p>
            </div>
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
