import React, { Component } from "react";
import "./ProductColors.scss";

class ProductColors extends Component {
  render() {
    const {
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
            const { color, id } = colorEl;
            return (
              <div
                pdSerialNumber={id}
                style={{ backgroundColor: color }}
                className="colorCircle"
                onClick={() => fixedImageAndSelectColor(colorEl, id)}
                onMouseOver={() => changeImage(idx)}
                onMouseOut={() => changeImage(null)}
              >
                <div
                  className={
                    selectColorValid === id
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
