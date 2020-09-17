import React, { Component } from "react";
import "./FilterSize.scss";

class FilterSize extends Component {
  render() {
    const {
      hideFilter,
      hideFilterImage,
      filterImage,
      productSize,
    } = this.props;

    return (
      <div className="FilterSize">
        <div onClick={() => hideFilter(3)} className="hideBar">
          <span>사이즈</span>
          <div
            className={hideFilterImage[3] ? "hideFilterImage" : "filterImage"}
          >
            <img className="minusImage" src={filterImage[0]} />
            <img className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div className={hideFilterImage[3] ? "hideTypeOfSize" : "typeOfSize"}>
          {productSize.map((el) => (
            <div className="sizeSquare">{el}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterSize;
