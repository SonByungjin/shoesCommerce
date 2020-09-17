import React, { Component } from "react";
import "./FilterSilluet.scss";

class FilterSilluet extends Component {
  render() {
    const {
      hideFilter,
      hideFilterImage,
      filterImage,
      productSilluet,
    } = this.props;

    return (
      <div className="FilterSilluet">
        <div onClick={() => hideFilter(4)} className="hideBar">
          <span>실루엣</span>
          <div
            className={hideFilterImage[4] ? "hideFilterImage" : "filterImage"}
          >
            <img className="minusImage" src={filterImage[0]} />
            <img className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div
          className={hideFilterImage[4] ? "hideTypeOfSilluet" : "typeOfSilluet"}
        >
          {productSilluet.map((el) => (
            <div className="silluetSquare">{el.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterSilluet;
