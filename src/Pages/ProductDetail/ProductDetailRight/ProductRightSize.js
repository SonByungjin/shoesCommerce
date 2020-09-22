import React from "react";
import SizeGuide from "../../../Components/SizeGuideModal/SizeGuide";
import SizeFind from "../../../Components/SizeGuideModal/SizeFind";
import "./ProductRightSize.scss";

class ProductRightSize extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogined: true,
      sizes: [],
      current: "",
      isSizeFindOpen: false,
      isSizeGuideOpen: false,
      quantity: "",
      quantityOverFive: false,
    };
  }

  componentDidMount() {
    this.setState({
      sizes: ["240", "250", "260", "270"],
      quantity: 1,
    });
  }

  handleClick = (index) => {
    this.setState({ current: index });
  };

  openSizeFindModal = () => {
    this.setState({
      isSizeFindOpen: !this.state.isSizeFindOpen,
    });
  };

  openSizeGuideModal = () => {
    this.setState({
      isSizeGuideOpen: !this.state.isSizeGuideOpen,
    });
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
        quantityOverFive: false,
      });
    }
  };

  increaseQuantity = () => {
    if (this.state.quantity < 5) {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    } else {
      this.setState({ quantityOverFive: true });
    }
  };

  render() {
    const { sizes } = this.state;

    return (
      <section className="ProductRightSize">
        <div className="first">
          <div className="sizeClick" onClick={this.openSizeFindModal}>
            사이즈가 고민되면 클릭하세요!
          </div>
          {this.state.isSizeFindOpen && (
            <SizeFind isSizeFindOpen={this.openSizeFindModal} />
          )}
          <span className="sizeGuideBtn" onClick={this.openSizeGuideModal}>
            사이즈 가이드
          </span>
          {this.state.isSizeGuideOpen && (
            <SizeGuide isSizeGuideOpen={this.openSizeGuideModal} />
          )}
        </div>
        <div className="second">
          <div className="size">
            {sizes.map((size, index) => (
              <span
                key={index}
                className={
                  this.state.current === index ? "Focused" : "NotFocused"
                }
                onClick={() => {
                  this.handleClick(index);
                }}
              >
                {size}
              </span>
            ))}
          </div>
          <div className="quantity">
            <div className="quantityOne">
              <span className="quantitySelect">{this.state.quantity}</span>
              <button className="decrease" onClick={this.decreaseQuantity}>
                -
              </button>
              <button className="increase" onClick={this.increaseQuantity}>
                +
              </button>
            </div>
            {this.state.quantityOverFive && (
              <div className="quantityTwo">
                <span>5개 까지 구매가능 합니다</span>
              </div>
            )}
          </div>
        </div>
        <div className="third">
          {!this.state.isLogined ? (
            <div className="isLogout">
              <div className="loginBtn">로그인</div>
            </div>
          ) : (
            <div className="isLogin">
              <span className="cart">장바구니</span>
              <span className="buy">바로구매</span>
              <span className="heart">
                <p>♥</p>
              </span>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default ProductRightSize;
