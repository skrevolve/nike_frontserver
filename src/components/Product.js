import React, { useState } from "react";
import "../css/default.css";
import "../css/Product.css";

export default function Main() {
  const [p_name, up_name] = useState([
    "나이키 에어 포스",
    "나이키 데이브레이크",
    "나이키 에어맥스 97",
  ]);
  const [p_title, up_title] = useState([
    "남성 신발",
    "여성 신발",
    "베이비 신발",
  ]);
  const [p_color, up_color] = useState(["1 컬러", "2 컬러", "3 컬러"]);
  const [p_price, up_price] = useState(["89,000원", "219,000원", "129,000원"]);

  return (
    <div className="content-body">
      <div className="category">
        <div className="content-container">
          <div>
            <div className="nav">
              <div className="link-area">
                <ul className="first-menu">
                  <li className="menu1 active">
                    <a href="">전체 보기</a>
                  </li>
                  <li className="menu2">
                    <a href="">MEN</a>
                  </li>
                  <li className="menu3">
                    <a href="">WOMEN</a>
                  </li>
                  <li className="menu4">
                    <a href="">KIDS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nr-container">
        <ul className="item-list-wrap">
          <li className="item-list">
            <div className="product-item">
              <div className="product-img">
                <a href="">
                  <img
                    src={require("../images/0b97d970-839d-4018-8e86-f46324009426_primary.jpg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-info">
              <div className="product-display">
                <div className="product-info-area">
                  <p className="product-display-name">{p_name[1]}</p>
                  <div className="product-subtitle">{p_title[1]}</div>
                  <div className="item-color-opt">{p_color[1]}</div>
                </div>
                <div className="product-price">
                  <p className="product-display-price">{p_price[1]}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item-list">
            <div className="product-item">
              <div className="product-img">
                <a href="">
                  <img
                    src={require("../images/0b97d970-839d-4018-8e86-f46324009426_primary.jpg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-info">
              <div className="product-display">
                <div className="product-info-area">
                  <p className="product-display-name">{p_name[2]}</p>
                  <div className="product-subtitle">{p_title[2]}</div>
                  <div className="item-color-opt">{p_color[2]}</div>
                </div>
                <div className="product-price">
                  <p className="product-display-price">{p_price[2]}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item-list">
            <div className="product-item">
              <div className="product-img">
                <a href="">
                  <img
                    src={require("../images/75e635cb-2d03-4342-8635-bb18aaa41c0a_primary (1).jpg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-info">
              <div className="product-display">
                <div className="product-info-area">
                  <p className="product-display-name">{p_name[2]}</p>
                  <div className="product-subtitle">{p_title[1]}</div>
                  <div className="item-color-opt">{p_color[0]}</div>
                </div>
                <div className="product-price">
                  <p className="product-display-price">{p_price[3]}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item-list">
            <div className="product-item">
              <div className="product-img">
                <a href="">
                  <img
                    src={require("../images/067912b9-e00a-425e-9122-1154edf28b16_primary.jpg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-info">
              <div className="product-display">
                <div className="product-info-area">
                  <p className="product-display-name">{p_name[0]}</p>
                  <div className="product-subtitle">{p_title[2]}</div>
                  <div className="item-color-opt">{p_color[0]}</div>
                </div>
                <div className="product-price">
                  <p className="product-display-price">{p_price[2]}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item-list">
            <div className="product-item">
              <div className="product-img">
                <a href="">
                  <img
                    src={require("../images/039eed3d-8937-443e-b1bc-ce12b38ae95b_primary.jpg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-info">
              <div className="product-display">
                <div className="product-info-area">
                  <p className="product-display-name">{p_name[2]}</p>
                  <div className="product-subtitle">{p_title[1]}</div>
                  <div className="item-color-opt">{p_color[0]}</div>
                </div>
                <div className="product-price">
                  <p className="product-display-price">{p_price[0]}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item-list">
            <div className="product-item">
              <div className="product-img">
                <a href="">
                  <img
                    src={require("../images/75e635cb-2d03-4342-8635-bb18aaa41c0a_primary (1).jpg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-info">
              <div className="product-display">
                <div className="product-info-area">
                  <p className="product-display-name">{p_name[2]}</p>
                  <div className="product-subtitle">{p_title[0]}</div>
                  <div className="item-color-opt">{p_color[1]}</div>
                </div>
                <div className="product-price">
                  <p className="product-display-price">{p_price[2]}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
