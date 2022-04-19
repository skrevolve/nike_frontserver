import React from "react";
import "../css/default.css";
import "../css/Mypage.css";
import { RiKakaoTalkFill } from 'react-icons/ri';
import { RiFacebookFill } from 'react-icons/ri';

export default function Mypage() {
return (
    <>
        <div className="Mypage-wrap">
            <div className="width-wrap">
                <div className="header-area">
                    <h1 className="s-title-top">MY PAGE</h1>
                    <h2 className="s-title">회원정보 수정</h2>
                </div>
                <div className="body-area">
                    <div className="form-body">
                        <div className="form-top">
                            <form method="POST" className="regi-form">
                                <div className="form-row">
                                    <p className="name-txt">아이디</p>
                                    <div className="text-field">
                                        <input type="email" disabled className="disabled"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <p className="name-txt">비밀번호</p>
                                    <div className="text-field">
                                        <input type="password"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <p className="name-txt">비밀번호 확인</p>
                                    <div className="text-field">
                                        <input type="password"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <p className="name-txt">이름</p>
                                    <div className="text-field">
                                        <input type="text" disabled className="disabled"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <p className="name-txt">핸드폰 번호</p>
                                    <div className="text-field">
                                        <input type="number"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="form-btn">
                            <button className="Mypage-btn">
                                수정하기
                            </button>
                        </div>
                        <div className="form-btn out">
                            <button className="out-btn">
                                회원탈퇴
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
