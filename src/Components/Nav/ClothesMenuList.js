import React from "react";
import ClothesMenuListData from "./ClothesMenuListData";
import "./ClothesMenuList.scss";

class ClothesMenuList extends React.Component {
  constructor() {
    super();
    this.state = {
      clothesMenuList: ClothesMenuListData.clothesMenuList,
      recommendItem: ClothesMenuListData.recommendItem,
    };
  }

  render() {
    const { clothesMenuList, recommendItem } = this.state;
    const { closeMenu, activeId } = this.props;
    return (
      <div className="clothesMenuList">
        <ul className={activeId ? "showList" : ""}>
          {clothesMenuList.map((menu, index) => {
            return (
              <li key={index}>
                <div>{menu}</div>
              </li>
            );
          })}
        </ul>
        <div className="recommendContainer">
          <div className="title">추천상품</div>
          <div className="productList">
            {recommendItem.map((item, index) => {
              return (
                <div className="product" key={index}>
                  <img alt={item.name} src={item.ImgSrc} />
                  <div className="productName">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="closeBtn" onClick={closeMenu}>
          <svg id="icon-close" viewBox="0 0 37 37">
            <path
              fillRule="nonzero"
              d="M36.533 3.533L33 0 18.267 14.733 3.533 0 0 3.533l14.733 14.734L0 33l3.533 3.533L18.267 21.8 33 36.533 36.533 33 21.8 18.267z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default ClothesMenuList;
