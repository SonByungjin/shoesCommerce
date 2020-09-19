import React from "react";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      emailValue: "",
      emailError: "",
      passwordValue: "",
      passwordError: "",
      rePasswordValue: "",
      rePasswordError: "",
      nameValue: "",
      nameError: "",
      phoneValue: "",
      phoneError: "",
      birthValue: "",
      birthError: "",
      isFemale: "",
      isMale: "", // isMale 만 true false 값으로
    };
  }

  handleEmailValue = (e) => {
    const { value } = e.target;
    this.setState({ emailValue: value });
  };

  handlePasswordValue = (e) => {
    const { value } = e.target;
    this.setState({ passwordValue: value });
  };

  handlerePasswordValue = (e) => {
    const { value } = e.target;
    this.setState({ rePasswordValue: value });
  };

  handleNameValue = (e) => {
    const { value } = e.target;
    this.setState({ nameValue: value });
  };

  handlePhoneValue = (e) => {
    const { value } = e.target;
    this.setState({ phoneValue: value });
  };

  handleBirthValue = (e) => {
    const { value } = e.target;
    this.setState({ birthValue: value });
  };

  handleClick = () => {
    const {
      emailValue,
      passwordValue,
      rePasswordValue,
      phoneValue,
      birthValue,
      nameValue,
    } = this.state;

    fetch("http://10.58.5.117:8000/account/signup", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        re_password: rePasswordValue,
        phone_number: phoneValue,
        date_of_birth: birthValue,
        name: nameValue,
        is_male: true,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.Authorization) {
          localStorage.setItem("token", result.Authorization);
          alert("로그인성공");
        } else if (result.message === "UNAUTHORIZED") {
          alert("비밀번호 확인해주세요");
        }
      });
  };

  render() {
    const {
      emailValue,
      passwordValue,
      rePasswordValue,
      nameValue,
      birthValue,
      phoneValue,
      isFemale,
      isMale,
    } = this.state;

    return (
      <section className="registerMain">
        <div className="signUpContainer">
          <div className="signUpHeader">
            <div className="headerInner">
              <div className="headerDisplay">
                <h1 className="title">회원가입</h1>
                <p className="descrText">
                  지금 컨버스 회원으로 가입하시고, 특별한 멤버십 혜택과 <br />
                  다양한 회원 전용 상품을 만나보세요
                </p>
              </div>
            </div>
          </div>
          <div className="signUpBody">
            <div className="signUpForm">
              <div className="entryField">
                <div className="signUpInfo">
                  <div className="socialSignUp">
                    <button className="kakao">
                      <svg id="icon-kakao" viewBox="0 0 24 22">
                        <path d="M12,0C5.373,0,0,4.238,0,9.465c0,3.403,2.277,6.386,5.693,8.054 c-0.251,0.935-0.909,3.387-1.04,3.912c-0.163,0.65,0.239,0.643,0.502,0.467c0.206-0.138,3.288-2.229,4.618-3.13 c0.722,0.106,1.466,0.163,2.227,0.163c6.627,0,12-4.238,12-9.466C24,4.238,18.627,0,12,0"></path>
                      </svg>
                      카카오 계정으로 1초 회원가입
                    </button>
                    <div className="makeOr">
                      <div></div>
                      <span>OR</span>
                      <div></div>
                    </div>
                  </div>
                  <div className="normalSignUp">
                    <div className="infoTitle">
                      <h1>필수정보</h1>
                    </div>
                    <div className="allInput">
                      <input
                        className="email"
                        type="email"
                        onChange={this.handleEmailValue}
                        value={emailValue}
                        placeholder="이메일 형태로 입력해주세요.(필수)"
                      ></input>
                      <span>{this.state.emailError}</span>
                      <input
                        className="password"
                        type="password"
                        onChange={this.handlePasswordValue}
                        value={passwordValue}
                        placeholder="비밀번호 (영문/숫자/특수문자 조합 8자 이상)"
                      ></input>
                      <input
                        className="rePassword"
                        type="password"
                        onChange={this.handlerePasswordValue}
                        value={rePasswordValue}
                        placeholder="비밀번호 입력 확인"
                      ></input>
                      <input
                        className="name"
                        type="text"
                        onChange={this.handleNameValue}
                        value={nameValue}
                        placeholder="이름을 입력해주세요.(필수)"
                      ></input>
                      <input
                        className="phoneNum"
                        type="text"
                        onChange={this.handlePhoneValue}
                        value={phoneValue}
                        placeholder="휴대폰 번호 '-'표 없이 입력해주세요.(필수)"
                      ></input>
                      <span>*생일/성별은 가입 후 수정이 불가합니다.</span>
                      <input
                        className="birth"
                        type="text"
                        onChange={this.handleBirthValue}
                        value={birthValue}
                        placeholder="생년월일을 입력해 주세요. (19990101)"
                      ></input>
                      <div className="gender">
                        <input
                          type="radio"
                          id="genderType0"
                          name="genderType"
                          value={isFemale}
                        ></input>
                        <label htmlFor="genderType0">여성</label>

                        <input
                          type="radio"
                          id="genderType1"
                          name="genderType"
                          value={isMale}
                        ></input>
                        <label htmlFor="genderType1">남성</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agreeField">
                <div className="totalAgree">
                  <div className="allCheck">
                    <input
                      type="checkbox"
                      id="check_all"
                      // onChange={onChangeTerm}
                    ></input>
                    <label for="check all" className="allAgree">
                      모든 약관 동의
                    </label>
                  </div>
                  <p className="allAgreeText">
                    아래 모든 약관(필수),개인정보 수집 및 이용에 대한 동의(필수)
                    및 광고성 정보수신 동의(선택) 내용을 확인하고 전체
                    동의합니다.
                  </p>
                  <ul className="allAgreeLi">
                    <li>
                      - 필수 정보의 수집 및 이용에 관한 동의를 거부하실 수
                      있으나, 다만 이 경우 회원 가입 및 관련 서비스 이용은
                      불가합니다.
                    </li>
                    <li>
                      - 선택 항목에 대한 동의를 거부하더라도 회원가입에 영향을
                      미치지 않습니다.
                    </li>
                    <li>- 만 14세 미만은 서비스 이용이 불가합니다.</li>
                  </ul>
                </div>
                <div className="needAgree">
                  <h1>
                    컨버스 공식 온라인 스토어 회원 약관 및 개인정보 수집•이용에
                    대한 동의
                  </h1>
                  <div className="needCheck">
                    <input type="checkbox" id="checkOne"></input>
                    <label for="checkOne">(필수)이용 약관에 대한 동의</label>
                  </div>
                  <div className="needCheckTwo">
                    <input type="checkbox" id="checkTwo"></input>
                    <label for="checkTwo">
                      (필수)개인정보 수집 및 이용에 대한 동의
                    </label>
                  </div>
                </div>
                <div className="selectAgree">
                  <h2>광고성 정보 수신 동의</h2>
                  <p>(회원 전용 다양한 이벤트 소식을 받아보세요)</p>
                  <div className="selectCheck">
                    <input type="checkbox" id="checkThree"></input>
                    <label for="checkThree">(선택)이메일 수신 동의</label>
                  </div>
                  <div className="selectCheckTwo">
                    <input type="checkbox" id="checkFour"></input>
                    <label for="checkFour">(선택)문자 수신동의</label>
                  </div>
                </div>
                <div className="finalSignUp">
                  <button type="submit" onClick={this.handleClick}>
                    회원가입하기(만 14세 이상)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
