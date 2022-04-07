import React from "react";
import "../css/default.css";
import "../css/Header.css";
//import nike from "../images/shoe.jpg";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="nk-brand">
          <ul className="nk-brand-item">
            <li>
              <a href="#">
                <img src="http://localhost:8080/images/shoe.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">컨버스</a>
            </li>
          </ul>
        </div>
        {/* // nk-brand */}
        <div className="desk-user">
          <ul>
            <li>
              <a className="menu-item-link" href="#">
                고객센터
              </a>
            </li>
            <li>
              <a className="menu-item-link" href="#">
                멤버 가입
              </a>
            </li>
            <li>
              <a className="menu-item-link" href="#">
                로그인
              </a>
            </li>
          </ul>
        </div>
        {/* // desk-user */}
      </div>
      {/* //header-top */}
      <div className="header">
        <h1 className="logo">로고</h1>
        <div className="gnb">
          <ul>
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </div>
        <div className="menu-opt">
          <div>
            <input type="search" />
            <button>검색</button>
          </div>
          <div>
            <button>찜목록</button>
            <button>장바구니</button>
          </div>
        </div>
      </div>
    </header>
  );
}
