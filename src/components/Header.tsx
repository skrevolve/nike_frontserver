import React from "react";
import "../css/default.css";
import "../css/Header.css";
import logoJ from "../images/logo_jordan.png";
import logoC from "../images/logo_converse.png";
import logoN from "../images/logo_nike.png";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="nk-brand">
          <ul className="nk-brand-item">
            <li>
              <a href="https://www.nike.com/kr/ko_kr/l/jordan" target="_blank">
                <img src={logoJ} alt="조던 홈페이지 새창 이동" />
              </a>
            </li>
            <li>
              <a href="https://www.converse.co.kr/" target="_blank">
                <img src={logoC} alt="컨버스 홈페이지 새창 이동" />
              </a>
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
        <h1 className="logo">
          <a href="#">
            <img src={logoN} alt="나이키" />
          </a>
        </h1>
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
          <div className="search_wrap">
            <input type="search" placeholder="검색" />
            <button>
              <span className="blind">검색</span>
            </button>
          </div>
          <div>
            <a href="#">
              <span>찜</span>
            </a>
            <a href="#">
              <span>장바구니</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
