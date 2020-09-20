import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY > 200;
      if (!isScrolled) {
        this.setState({
          scrolled: false,
        });
      } else {
        this.setState({
          scrolled: true,
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    const { scrolled } = this.state;
    return (
      <div className={scrolled ? "navWrap navWrapScrolled" : "navWrap"}>
        <div className="nav">
          <ul className="leftMenu">
            <li>
              <a href="/main">
                <img alt="navLogo" src="images/Nav/navLogo.png" />
              </a>
            </li>
            {leftMenuList.map((menu, index) => {
              return (
                <li key={index}>
                  <a href="/main">{menu}</a>
                </li>
              );
            })}
          </ul>
          <ul className="rightMenu">
            {rightMenuIcons.map((icon, index) => {
              return (
                <li key={index}>
                  <a href="/main">{icon.imgSrc}</a>
                </li>
              );
            })}
            <li className={scrolled ? "searchBarScrolled" : "searchBar"}>
              <div className="text">검색</div>
              <div className="icon">
                <img
                  alt="searchIcon"
                  src="https://www.tenforums.com/geek/gars/images/2/types/thumb_Search_Taskbar.jpg"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;

export const leftMenuList = ["신발", "의류", "아동", "런칭캘린더", "회원전용"];

export const rightMenuIcons = [
  {
    imgSrc: (
      <svg id="nav-profile" viewBox="0 0 32 30">
        <path d="M16 3.8c3.6 0 6.6 3 6.6 6.6S19.6 17 16 17s-6.6-3-6.6-6.6 3-6.6 6.6-6.6M6 10.4c0 3.7 2.1 6.9 5.1 8.6-4.9 1.6-9 5.4-10.7 10.5h3.7c2.1-4.7 6.7-7.9 11.9-7.9s9.9 3.1 11.9 7.9h3.7c-1.7-5.1-5.7-8.9-10.7-10.5 3-1.7 5.1-4.9 5.1-8.6 0-5.5-4.5-10-10-10S6 4.9 6 10.4"></path>
      </svg>
    ),
  },
  {
    imgSrc: (
      <svg id="nav-cart" viewBox="0 0 41 35">
        <g fillRule="evenodd">
          <path d="M0 0v3.4h5.836l6.098 23.448H34.94L40.528 5.46H9.866L8.478 0H0zm10.746 8.86h25.382l-3.814 14.588H14.56L10.746 8.86zM12.956 31.449l.79 3.4h6.002v-3.4zM27.124 31.449v3.4h6.002l.776-3.4z"></path>
        </g>
      </svg>
    ),
  },
  {
    imgSrc: (
      <svg id="icon-heart" viewBox="0 0 38 34">
        <path
          fillRule="nonzero"
          d="M27.57 3.241a6.885 6.885 0 0 1 5.032 2.118l.274.297a7.033 7.033 0 0 1 1.873 4.997 6.966 6.966 0 0 1-2.105 4.934L18.96 29.457 5.19 15.568a6.966 6.966 0 0 1-2.105-4.935 7.033 7.033 0 0 1 1.853-4.87l.294-.318a6.845 6.845 0 0 1 4.957-2.205 6.843 6.843 0 0 1 5.001 2.099l1.516 1.461 2.105 2.118 2.106-2.118 1.515-1.482a6.823 6.823 0 0 1 4.864-2.118l.273.042zM27.297.023a9.95 9.95 0 0 0-7.116 2.964l-1.495 1.461-1.516-1.46A9.991 9.991 0 0 0 9.89 0a9.995 9.995 0 0 0-7.183 3.22l-.274.296a10.245 10.245 0 0 0-2.42 7.136 10.131 10.131 0 0 0 2.947 7.179l16 16.115 16-16.136a10.131 10.131 0 0 0 2.947-7.158 10.24 10.24 0 0 0-2.695-7.03l-.273-.297A10.036 10.036 0 0 0 27.57.065l-.273-.042z"
        ></path>
      </svg>
    ),
  },
  {
    imgSrc: (
      <svg id="nav-cs" viewBox="0 0 18.5 18.5">
        <path d="M9.25,18.5C4.149,18.5,0,14.351,0,9.25S4.149,0,9.25,0s9.25,4.149,9.25,9.25 S14.351,18.5,9.25,18.5z M9.25,1.5C4.977,1.5,1.5,4.977,1.5,9.25S4.977,17,9.25,17S17,13.523,17,9.25S13.523,1.5,9.25,1.5z"></path>
        <path d="M7.35,5.665c0.512-0.53,1.23-0.811,1.966-0.769 c0.68-0.033,1.344,0.204,1.848,0.66c0.463,0.436,0.717,1.048,0.699,1.683c0.017,0.353-0.069,0.704-0.249,1.01 c-0.305,0.414-0.65,0.797-1.03,1.141c-0.298,0.263-0.547,0.576-0.735,0.925c-0.13,0.358-0.186,0.738-0.166,1.118h-1.03 c-0.014-0.457,0.054-0.912,0.201-1.347C9.059,9.63,9.358,9.221,9.731,8.886l0.474-0.469c0.133-0.124,0.248-0.266,0.343-0.421 c0.153-0.236,0.236-0.512,0.237-0.793c0.008-0.363-0.114-0.717-0.344-0.998c-0.307-0.32-0.745-0.476-1.185-0.42 C8.696,5.731,8.159,6.021,7.895,6.518C7.728,6.896,7.647,7.307,7.657,7.72H6.639C6.599,6.968,6.854,6.23,7.35,5.665 M8.605,12.407 H9.79v1.202H8.605V12.407z"></path>
      </svg>
    ),
  },
];
