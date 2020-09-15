import React, { Component } from "react";
import "./FilterVerticalBar.scss";
// import Img from "./img";

export class FilterVerticalBar extends Component {
  constructor() {
    super();
    this.state = {
      productColor: [
        "black",
        "blue",
        "green",
        "navy",
        "purple",
        "brown",
        "gray",
        "gold",
        "beige",
        "red",
        "orange",
        "pink",
        "yellow",
      ],
      productSize: [
        "220",
        "225",
        "230",
        "235",
        "240",
        "245",
        "250",
        "255",
        "260",
        "265",
        "270",
        "275",
        "280",
        "285",
        "290",
        "295",
        "300",
      ],
      productSilluet: [
        {
          img: "",
          name: "하이",
        },
        {
          img: "",
          name: "로우",
        },
        {
          img: "",
          name: "미드",
        },
        {
          img: "",
          name: "플랫폼",
        },
        {
          img: "",
          name: "슬립",
        },
      ],
    };
  }

  render() {
    return (
      <div className="FilterVerticalBar">
        <div className="filterGender">
          <div className="hideBar">
            <span>구분</span>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 5'%3E%3Cpath fill='%23000' d='M0 0h40v4.5H0z' /%3E%3C/svg%3E" />
          </div>
          <div className="kindsOfGender">
            <a>남성</a>
            <a>여성</a>
          </div>
        </div>
        <div className="filterType">
          <div className="hideBar">
            <span>제품 타입</span>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 5'%3E%3Cpath fill='%23000' d='M0 0h40v4.5H0z' /%3E%3C/svg%3E" />
          </div>
          <div className="kindsOfType">
            <a>뮬</a>
            <a>샌들&뮬</a>
            <a>스니커즈</a>
          </div>
        </div>
        <div className="filterColor">
          <div className="hideBar">
            <span>색상</span>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 5'%3E%3Cpath fill='%23000' d='M0 0h40v4.5H0z' /%3E%3C/svg%3E" />
          </div>
          <div className="typeOfColor">
            {this.state.productColor.map((el) => (
              <div
                style={{ backgroundColor: el }}
                className="colorCircle"
              ></div>
            ))}
          </div>
        </div>
        <div className="filterSize">
          <div className="hideBar">
            <span>사이즈</span>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 5'%3E%3Cpath fill='%23000' d='M0 0h40v4.5H0z' /%3E%3C/svg%3E" />
          </div>
          <div className="typeOfSize">
            {this.state.productSize.map((el) => (
              <div className="sizeSquare">{el}</div>
            ))}
          </div>
        </div>
        <div className="filterSilluet">
          <div className="hideBar">
            <span>실루엣</span>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 5'%3E%3Cpath fill='%23000' d='M0 0h40v4.5H0z' /%3E%3C/svg%3E" />
          </div>
          <div className="typeOfSilluet">
            {this.state.productSilluet.map((el) => (
              <div className="silluetSquare">{el.name}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FilterVerticalBar;
