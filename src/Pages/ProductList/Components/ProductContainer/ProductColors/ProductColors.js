import React, { Component } from "react";
import "./ProductColors.scss";

class ProductColors extends Component {
  render() {
    const {
      id,
      colorList,
      changeImage,
      fixedImageAndSelectColor,
      colorListValid,
      selectColorValid,
    } = this.props;
    return (
      <div className="ProductColors">
        <div className="colorString">
          <span>{colorList.length}컬러</span>
        </div>
        <div className={colorListValid ? "colorListValid" : "colorListUnvalid"}>
          {colorList.map((colorEl, idx) => {
            const { color } = colorEl;
            return (
              <div
                key={id}
                style={{ backgroundColor: color }}
                className="colorCircle"
                onClick={() => fixedImageAndSelectColor(colorEl, idx)}
                onMouseOver={() => changeImage(idx)}
                onMouseOut={() => changeImage(null)}
              >
                <div
                  className={
                    selectColorValid === idx
                      ? "selectColorValid"
                      : "selectColorUnvalid"
                  }
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductColors;
