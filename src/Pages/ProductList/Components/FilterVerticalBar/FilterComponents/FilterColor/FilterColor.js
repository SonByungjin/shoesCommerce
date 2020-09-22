import React, { Component } from "react";
import "./FilterColor.scss";

class FilterColor extends Component {
  constructor() {
    super();
    this.state = {
      selectColor: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  }

  handleColor = (idx) => {
    this.setState(
      {
        selectColor: [
          ...this.state.selectColor.slice(0, idx),
          !this.state.selectColor[idx],
          ...this.state.selectColor.slice(idx + 1),
        ],
      },
      () => {
        console.log(this.state.selectColor);
      }
    );
  };

  render() {
    const {
      hideFilter,
      hideFilterImage,
      filterImage,
      productColor,
    } = this.props;
    const { selectColor } = this.state;

    return (
      <div className="FilterColor">
        <div onClick={() => hideFilter(2)} className="hideBar">
          <span>색상</span>
          <div
            className={hideFilterImage[2] ? "hideFilterImage" : "filterImage"}
          >
            <img alt="minusImage" className="minusImage" src={filterImage[0]} />
            <img alt="plusImage" className="plusImage" src={filterImage[1]} />
          </div>
        </div>
        <div className={hideFilterImage[2] ? "hideTypeOfColor" : "typeOfColor"}>
          {productColor.map((Color, idx) => (
            <div
              onClick={() => this.handleColor(idx)}
              style={{ backgroundColor: Color }}
              className="colorCircle"
            >
              <div
                className={
                  selectColor[idx] ? "selectColorAfter" : "selectColorBefore"
                }
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterColor;
