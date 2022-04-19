//import React from "react";
import React, { Component } from "react";
import jquery from "jquery";
import $ from "jquery";
import "../css/default.css";
import "../css/Header.css";
import Login from "./Login";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    $(document).ready(function () {
      $(".gnb > ul > li").mouseenter(function () {
        $(this).find(".sub_menu_wrap").css("display", "flex");
      });
      $(".gnb > ul > li").mouseleave(function () {
        $(this).find(".sub_menu_wrap").css("display", "none");
      });
      $(".gnb > ul > li").click(function () {
        $(this).find(".sub_menu_wrap").css("display", "none");
      });
    });
  }

  openLogin = () => {
    this.setState({ login: true });
  };

  closeLogin = () => {
    this.setState({ login: false });
  };

  render() {
    //function Header() {
    return (
      <header>
        <div className="header-top">
          <div className="nk-brand">
            <ul className="nk-brand-item">
              <li>
                <a href="#">
                  <img
                    src={require("../images/logo_jordan.png")}
                    alt="조던 홈페이지 이동"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={require("../images/logo_converse.png")}
                    alt="컨버스 홈페이지 이동"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* // nk-brand */}
          <div className="desk-user">
            <ul>
              <li>
                <Link to="/Customer" className="menu-item-link">
                  고객센터
                </Link>
              </li>
              <li>
                <Link to="/Signup" className="menu-item-link">
                  멤버 가입
                </Link>
              </li>
              <li>
                <a href="#" onClick={this.openLogin} className="menu-item-link">
                  로그인
                </a>
                <Login open={this.state.login} close={this.closeLogin} />
              </li>
              <li>
                <Link to="/Mypage" className="menu-item-link">
                  마이페이지
                </Link>
              </li>
            </ul>
          </div>
          {/* // desk-user */}
        </div>
        {/* //header-top */}
        <div className="header">
          <h1 className="logo">
            <Link to="/">
              <img
                src={require("../images/logo_nike.png")}
                alt="나이키 메인 홈페이지 이동"
              />
            </Link>
          </h1>
          <div className="gnb">
            <ul>
              <li>
                <Link to="/NrPage">New Releases</Link>
                <div className="sub_menu_wrap">
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>New & Featured</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신상품 전체보기</a>
                      </li>
                      <li>
                        <a href="">SNKRS</a>
                      </li>
                      <li>
                        <a href="">에어 포스 1</a>
                      </li>
                      <li>
                        <a href="">ACG</a>
                      </li>
                      <li>
                        <a href="">NikeLab</a>
                      </li>
                      <li>
                        <a href="">봄을 위한 스타일링 추천</a>
                      </li>
                      <li>
                        <a href="">지속가능한 컬렉션</a>
                      </li>
                      <li>
                        <a href="">품절임박</a>
                      </li>
                      <li>
                        <a href="">New To Sale</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>New For Men</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발</a>
                      </li>
                      <li>
                        <a href="">의류</a>
                      </li>
                      <li>
                        <a href="">용품</a>
                      </li>
                      <li>
                        <a href="">전체보기</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>New For Women</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발</a>
                      </li>
                      <li>
                        <a href="">의류</a>
                      </li>
                      <li>
                        <a href="">용품</a>
                      </li>
                      <li>
                        <a href="">전체보기</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>New For Kids</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발</a>
                      </li>
                      <li>
                        <a href="">의류</a>
                      </li>
                      <li>
                        <a href="">용품</a>
                      </li>
                      <li>
                        <a href="">전체보기</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Sidebar">Men</Link>
                <div className="sub_menu_wrap">
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>New & Featured</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신상품 전체보기</a>
                      </li>
                      <li>
                        <a href="">SNKRS</a>
                      </li>
                      <li>
                        <a href="">에어 포스 1</a>
                      </li>
                      <li>
                        <a href="">ACG</a>
                      </li>
                      <li>
                        <a href="">NikeLab</a>
                      </li>
                      <li>
                        <a href="">봄을 위한 스타일링 추천</a>
                      </li>
                      <li>
                        <a href="">지속가능한 컬렉션</a>
                      </li>
                      <li>
                        <a href="">품절임박</a>
                      </li>
                      <li>
                        <a href="">New To Sale</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>신발</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발 전체</a>
                      </li>
                      <li>
                        <a href="">라이프스타일</a>
                      </li>
                      <li>
                        <a href="">러닝</a>
                      </li>
                      <li>
                        <a href="">농구</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>의류</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">의류 전체</a>
                      </li>
                      <li>
                        <a href="">탑 & 티셔츠</a>
                      </li>
                      <li>
                        <a href="">팬츠 & 타이즈</a>
                      </li>
                      <li>
                        <a href="">숏 팬츠</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>스포츠</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">러닝</a>
                      </li>
                      <li>
                        <a href="">농구</a>
                      </li>
                      <li>
                        <a href="">축구</a>
                      </li>
                      <li>
                        <a href="">골프</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>브랜드</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">Nike Sportswear</a>
                      </li>
                      <li>
                        <a href="">NikeLab</a>
                      </li>
                      <li>
                        <a href="">Jordan</a>
                      </li>
                      <li>
                        <a href="">NBA</a>
                      </li>
                      <li>
                        <a href="">ACG</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Sidebar">Women</Link>
                <div className="sub_menu_wrap">
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>New & Featured</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신상품 전체보기</a>
                      </li>
                      <li>
                        <a href="">SNKRS</a>
                      </li>
                      <li>
                        <a href="">에어 포스 1</a>
                      </li>
                      <li>
                        <a href="">ACG</a>
                      </li>
                      <li>
                        <a href="">NikeLab</a>
                      </li>
                      <li>
                        <a href="">봄을 위한 스타일링 추천</a>
                      </li>
                      <li>
                        <a href="">지속가능한 컬렉션</a>
                      </li>
                      <li>
                        <a href="">품절임박</a>
                      </li>
                      <li>
                        <a href="">New To Sale</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>신발</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발 전체</a>
                      </li>
                      <li>
                        <a href="">라이프스타일</a>
                      </li>
                      <li>
                        <a href="">러닝</a>
                      </li>
                      <li>
                        <a href="">농구</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>의류</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">의류 전체</a>
                      </li>
                      <li>
                        <a href="">탑 & 티셔츠</a>
                      </li>
                      <li>
                        <a href="">팬츠 & 타이즈</a>
                      </li>
                      <li>
                        <a href="">숏 팬츠</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>스포츠</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">러닝</a>
                      </li>
                      <li>
                        <a href="">농구</a>
                      </li>
                      <li>
                        <a href="">축구</a>
                      </li>
                      <li>
                        <a href="">골프</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>브랜드</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">Nike Sportswear</a>
                      </li>
                      <li>
                        <a href="">NikeLab</a>
                      </li>
                      <li>
                        <a href="">Jordan</a>
                      </li>
                      <li>
                        <a href="">NBA</a>
                      </li>
                      <li>
                        <a href="">ACG</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Sidebar">Kids</Link>
                <div className="sub_menu_wrap">
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>New & Featured</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신상품 전체보기</a>
                      </li>
                      <li>
                        <a href="">SNKRS</a>
                      </li>
                      <li>
                        <a href="">에어 포스 1</a>
                      </li>
                      <li>
                        <a href="">ACG</a>
                      </li>
                      <li>
                        <a href="">NikeLab</a>
                      </li>
                      <li>
                        <a href="">봄을 위한 스타일링 추천</a>
                      </li>
                      <li>
                        <a href="">지속가능한 컬렉션</a>
                      </li>
                      <li>
                        <a href="">품절임박</a>
                      </li>
                      <li>
                        <a href="">New To Sale</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>신발</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">베이비 (160mm이하)</a>
                      </li>
                      <li>
                        <a href="">리틀키즈 (165-220mm)</a>
                      </li>
                      <li>
                        <a href="">주니어(225-250mm)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>의류</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">베이비 (0-4세)</a>
                      </li>
                      <li>
                        <a href="">리틀키즈 (4-7세)</a>
                      </li>
                      <li>
                        <a href="">주니어 (8-13세)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>용품</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">가방</a>
                      </li>
                      <li>
                        <a href="">모자</a>
                      </li>
                      <li>
                        <a href="">양말</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>스포츠</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">러닝</a>
                      </li>
                      <li>
                        <a href="">축구</a>
                      </li>
                      <li>
                        <a href="">농구</a>
                      </li>
                      <li>
                        <a href="">테니스</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Sidebar">Sale</Link>
                <div className="sub_menu_wrap">
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>NEW TO SALE</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>Mens Sale</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발</a>
                      </li>
                      <li>
                        <a href="">의류</a>
                      </li>
                      <li>
                        <a href="">용품</a>
                      </li>
                      <li>
                        <a href="">전체보기</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>Womens Sale</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발</a>
                      </li>
                      <li>
                        <a href="">의류</a>
                      </li>
                      <li>
                        <a href="">용품</a>
                      </li>
                      <li>
                        <a href="">전체보기</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <a href="">
                          <strong>Kids Sale</strong>
                        </a>
                      </li>
                      <li>
                        <a href="">신발</a>
                      </li>
                      <li>
                        <a href="">의류</a>
                      </li>
                      <li>
                        <a href="">용품</a>
                      </li>
                      <li>
                        <a href="">전체보기</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu_opt">
            <div className="srch_wrap">
              <input type="search" />
              <button className="btn_srch">
                <span className="blind">검색</span>
                <RiSearchLine size="22" />
              </button>
            </div>
            <div className="btn_customer">
              <button>
                <span className="blind">찜목록</span>
                <RiHeartLine size="24" />
              </button>
              <button>
                <span className="blind">장바구니</span>
                <RiShoppingCartLine size="24" />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
