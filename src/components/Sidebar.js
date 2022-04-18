import React from "react";
import "../css/default.css";
import "../css/Sidebar.css";

export default function Sidebar() {
return (
    <>
        <div className="top-side">
            <div className="title-section">
                <h1 className="tit-txt">신상품 전체 보기<span className="tit-txt-num"> (3708)</span></h1>
            </div>
            <div className="filter-section">
                <button className="filter-btn">
                    필터
                </button>
                <div className="select-btn">
                    신상품순
                </div>
            </div>
        </div>

        <div className="left-side">
            <div className="left-side-inner">
                <div className="inner-section">
                    <div className="section-tit">
                        <span className="tit-txt">카테고리 분류</span>
                    </div>
                    <div className="section-wrap">
                        <ul className="s-item-wrap">
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>의류</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>용품</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>신발</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="inner-section">
                    <div className="section-tit">
                        <span className="tit-txt">성별</span>
                    </div>
                    <div className="section-wrap">
                        <ul className="s-item-wrap">
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>여성</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>남성</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>성인공용</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>아동공용</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>키즈</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="inner-section">
                    <div className="section-tit">
                        <span className="tit-txt">아이콘</span>
                    </div>
                    <div className="section-wrap">
                        <ul className="s-item-wrap">
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>에어 포스 1</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>나이키 에어맥스</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>데이브레이크</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>인피니티 런</span>
                                </span>
                            </li>
                            <li className="s-item">
                                <span className="input-checkbox">
                                    <input type="checkbox"></input>
                                    <span>블레이저</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
