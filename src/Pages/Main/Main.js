import React from "react";
// import SHOESICONDATA from "/data/Main/SHOESICONDATA";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      shoesIconList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/Main/SHOESICONDATA.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          shoesIconList: res.data,
        });
      });
  }

  render() {
    const { shoesIconList } = this.state;
    return (
      <article className="container">
        <section className="mediaTile1">
          <h1>
            CONVERSE X <br />
            A-COLD-WALL* COLLECTION <br />
            DRAW
          </h1>
          <h2>
            언더그라운드 스트릿 컬처와 건축물. <br />
            그리고 자연환경을 정밀하게 조합해 디자인된 <br />
            럭셔리 브랜드 어콜드월*과의 콜라보레이션을 드로우 발매합니다.
          </h2>
          <a href="/main">
            <svg id="icon-arrow" viewBox="0 0 46.7 36">
              <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
            </svg>
            드로우 참여하기
          </a>
          <a href="/main">
            <svg id="icon-arrow" viewBox="0 0 46.7 36">
              <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
            </svg>
            더 알아보기
          </a>
        </section>
        <div className="shoesIcon">
          <h1>CHOOSE YOUR ICON</h1>
          <a href="/main">
            <svg id="icon-arrow" viewBox="0 0 46.7 36">
              <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
            </svg>
            신발 전체 보기
          </a>
          <ul className="shoes">
            {shoesIconList.map((shoes) => {
              return (
                <li key={shoes.id}>
                  <a href="/main">
                    <img alt={shoes.name} src={shoes.url} />
                    <div className="caption">{shoes.name}</div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <section className="mediaTile2">
          <h1>
            CONVERSE X <br />
            THESOLOIST <br />
            ERX 260
          </h1>
          <h2>
            1980년대 레전드 농구화에
            <br />
            반항적인 펑크 락 스타일을 더해 모던하게 재해석한
            <br />
            더솔로이스트와의 콜라보레이션 'ERX 260'을 선보입니다.
          </h2>
          <button>구매하기</button>
        </section>
        <section className="dashBoard1">
          <div className="productSub">
            <div className="top">
              <div className="status">NOW AVAILABLE</div>
              <h1>CHUCK 70 GORE-TEX</h1>
              <h2>
                프리미엄 척 70에 뛰어난 방수기능을 더한 <br />척 70 고어텍스를
                경험해보세요
              </h2>
              <a href="/main">
                <svg id="icon-arrow" viewBox="0 0 46.7 36">
                  <path d="M27.9 0l-3.6 3.5 12.5 12.1H0v4.9h36.8l-12.5 12 3.6 3.5 18.6-18z"></path>
                </svg>
                구매하기
              </a>
            </div>
            <a href="/main" className="bottom">
              <div className="bottomLeft"></div>
              <div className="bottomRight"></div>
            </a>
          </div>
          <div className="productMain"></div>
        </section>
        <section className="dashBoard2">
          <div className="productMain">
            <h1>
              CHUCK 70 <br />
              NEW COLORWAY
            </h1>
            <h2>
              디지털과 자연에서 영감을 받은 <br />
              새로운 컬러의 척 70을 만나보세요.
            </h2>
            <button>구매하기</button>
          </div>
          <a href="/main" className="productSub">
            <div className="top">
              <div className="topOverlay">
                <h2>척 70 빈티지 캔버스 러쉬블루</h2>
              </div>
            </div>
            <div className="bottom">
              <div className="bottomLeft"></div>
              <div className="bottomRight"></div>
            </div>
          </a>
        </section>
        <section className="dashBoard3">
          <div className="modelPhoto"></div>
          <div className="productDesc"></div>
        </section>
        <section className="dashBoard4">
          <div className="productSub">
            <div className="top">
              <div className="status"></div>
              <h1>UNT1TL3D RIVALS</h1>
              <h2>
                과감한 컬러블록 디자인과 리믹스 러버 디테일로 완성된 <br />
                언타이틀드 라이블을 만나보세요
              </h2>
              <button>구매하기</button>
            </div>
            <a href="/main" className="bottom">
              <div className="bottomLeft"></div>
              <div className="bottomRight"></div>
            </a>
          </div>
          <div className="productMain"></div>
        </section>
        <section className="dashBoard5">
          <div className="productMain">
            <h1>CONVERSE SHAPES</h1>
            <h2>
              모두를 위한 컨버스 셰입스. <br />
              정해진 기준에서 벗어나 나만의 방식으로 스타일링 하세요.
            </h2>
            <button>더 알아보기</button>
            <button>구매하기</button>
          </div>
          <a href="/main" className="productSub">
            <div className="top">
              <div className="topLeft"></div>
              <div className="topRight"></div>
            </div>
            <div className="bottom">
              <div className="bottomLeft"></div>
              <div className="bottomRight"></div>
            </div>
          </a>
        </section>
        <section className="mediaTile3">
          <video
            playsinline="playsinline"
            preload="auto"
            tabindex="-1"
            role="application"
            loop
            muted="muted"
            autoplay=""
            data-module-lazymedia="https://image.converse.co.kr/structured-content/18035/[SHANA]Converse_CX_master_1920x1080.mp4"
            src="https://image.converse.co.kr/structured-content/18035/[SHANA]Converse_CX_master_1920x1080.mp4"
          ></video>
        </section>
      </article>
    );
  }
}

export default Main;
