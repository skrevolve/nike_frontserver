import React from "react";
import "../css/default.css";
import "../css/Header.css";
import { Link } from 'react-router-dom';

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
              <Link to="/Notice" className="menu-item-link">
                고객센터
              </Link>
            </li>
            <li>
              <Link to="/Sighup" className="menu-item-link">
                멤버 가입
              </Link>
            </li>
            <li>
              <Link to="/Login" className="menu-item-link">
                로그인
              </Link>
            </li>
          </ul>
        </div>
        {/* // desk-user */}
      </div>
      {/* //header-top */}
      <div className="header">
        <h1 className="logo"><Link to="/">로고</Link></h1>
        <div className="gnb">
          <ul>
            <li>
              <Link to="/NR_page">New Releases</Link>
            </li>
            <li>
            <Link to="/Sidebar">Men</Link>
            </li>
            <li>
            <Link to="/Sidebar">Women</Link>
            </li>
            <li>
            <Link to="/Sidebar">Kids</Link>
            </li>
            <li>
            <Link to="/Sidebar">Sale</Link>
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
