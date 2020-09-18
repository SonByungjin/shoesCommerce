import React from "react";
import "./SizeGuidePanel.scss";

class SizeGuide extends React.Component {
  render() {
    return (
      <div className="SizeGuide">
        <div className="sizeContainer">
          <span className="sizeCloseBtn" onClick={this.props.toggleModal}>
            X
          </span>
          <div className="sizeTitle">신발 사이즈 차트</div>
          <div className="sizeTitleSecond">
            <span className="converseSize">컨버스 사이즈</span>
            <span className="converseSizeMM">밀리미터(mm)</span>
          </div>
          <div className="sizeTable">
            <table id="sizes">
              <tbody>
                <tr>
                  {sizesHEAD.map((el, index) => {
                    return <th key={index}>{el}</th>;
                  })}
                </tr>
                <tr>
                  <td>3</td>
                  <td>220</td>
                  <td>3</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3.5</td>
                  <td>225</td>
                  <td>3.5</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>230</td>
                  <td>4</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4.5</td>
                  <td>235</td>
                  <td>4.5</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeGuide;

const sizesHEAD = ["US MEN", "KOREA MEN", "US WOMEN", "KOREA WOMEN"];
