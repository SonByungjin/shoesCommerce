import React, { Component } from "react";
import "./FilterHorizontalBar.scss";

class FilterHorizontalBar extends Component {
  render() {
    return (
      <div className="FilterHorizontalBar">
        <div className="filterContainer">
          <div className="hideFilter">
            <span>필터 숨기기</span>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 5'%3E%3Cpath fill='%23000' d='M0 0h40v4.5H0z' /%3E%3C/svg%3E" />
          </div>
          <div className="numberingProduct">
            <span>총 {this.props.cnt}개의 상품</span>
          </div>
          <div className="arrayProduct">
            <span>신상품순</span>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46.7 36'%3E%3Cpath fill='%23000' d='M23.5 33.333L47 0H0z'/%3E%3C/svg%3E" />
          </div>
        </div>
      </div>
    );
  }
}

export default FilterHorizontalBar;
