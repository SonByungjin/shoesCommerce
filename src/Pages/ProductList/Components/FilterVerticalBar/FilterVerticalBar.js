import React, { Component } from "react";
import { productColor, productSize, productSilluet } from "./filterContents";
import FilterGender from "./FilterComponents/FilterGender/FilterGender";
import FilterType from "./FilterComponents/FilterType/FilterType";
import "./FilterVerticalBar.scss";
import FilterColor from "./FilterComponents/FilterColor/FilterColor";
import FilterSize from "./FilterComponents/FilterSize/FilterSize";
import FilterSilluet from "./FilterComponents/FilterSilluet/FilterSilluet";

export class FilterVerticalBar extends Component {
  constructor() {
    super();
    this.state = {
      productColor: [],
      productSize: [],
      productSilluet: [],
      filterImage: [
        "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 5'%3E%3Cpath fill='%23000' d='M0 0h40v4.5H0z' /%3E%3C/svg%3E",
        "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 40 40'%3E%3Cpath fill='%23000' d='M40 17.857H22.143V0h-4.286v17.857H0v4.286h17.857V40h4.286V22.143H40z' /%3E%3C/svg%3E",
      ],
      hideFilterImage: [false, false, false, false, false],
    };
  }

  componentDidMount() {
    this.setState({
      productColor: productColor,
      productSize: productSize,
      productSilluet: productSilluet,
    });
  }

  hideFilter = (e) => {
    this.setState({
      hideFilterImage: [
        ...this.state.hideFilterImage.slice(0, e),
        !this.state.hideFilterImage[e],
        ...this.state.hideFilterImage.slice(e + 1),
      ],
    });
  };

  render() {
    const {
      productColor,
      productSize,
      productSilluet,
      filterImage,
      hideFilterImage,
    } = this.state;
    const { filteringColor, filteringSize, filteringSilluet } = this.props;
    return (
      <div className="FilterVerticalBar">
        <FilterGender
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
        />
        <FilterType
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
        />
        <FilterColor
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
          productColor={productColor}
          filteringColor={(Color) => filteringColor(Color)}
        />
        <FilterSize
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
          productSize={productSize}
          filteringSize={(size) => filteringSize(size)}
        />
        <FilterSilluet
          hideFilter={this.hideFilter}
          hideFilterImage={hideFilterImage}
          filterImage={filterImage}
          productSilluet={productSilluet}
          filteringSilluet={(silluetEngName) =>
            filteringSilluet(silluetEngName)
          }
        />
      </div>
    );
  }
}

export default FilterVerticalBar;
