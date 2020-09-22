import React from "react";
import "./ProductMainImg.scss";

class ProductMainImg extends React.Component {
  constructor() {
    super();
    this.state = {
      productSubImgs: [],
    };
  }

  componentDidMount() {
    const { productSubImg } = this.props;
    this.setState({
      productSubImgs: productSubImg,
    });
  }

  render() {
    const { productMainImg } = this.props;
    const { productSubImgs } = this.state;

    return (
      <div className="ProductMainImg">
        <section className="mainImg">
          <img alt="Product Main img" src={productMainImg} />
        </section>
        <section className="mainImgMore">
          <div className="imgMoreContainer">
            <ul>
              <li>
                <img alt="notshowing" src="" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductMainImg;
