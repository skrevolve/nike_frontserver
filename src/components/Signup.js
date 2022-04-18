import React from "react";
import "../css/default.css";
import "../css/Signup.css";
import { RiKakaoTalkFill } from 'react-icons/ri';
import { RiFacebookFill } from 'react-icons/ri';

export default function Signup() {
return (
    <>
        <div className="Signup-wrap">
            <div className="width-wrap">
                <div className="header-area">
                    <h2 className="s-title">나이키 멤버 가입</h2>
                    <p className="s-description">
                        멤버가 되어 나이키가 제공하는 <br/>
                        최고의 제품과 혜택을 만나보세요.
                    </p>
                </div>
                <div className="body-area">
                    <div className="social-body">
                        <div className="social-container">
                            <div className="social-grid">
                                <div className="width-1">
                                    <a href="#" className="btn-social btn-kakao">
                                        <span className="social-txt kakao-txt"><RiKakaoTalkFill className="icons kakao-icon" size="24"/> 카카오 계정으로 신규 가입</span>
                                    </a>
                                </div>
                                <div className="width-1">
                                    <a href="#" className="btn-social btn-facebook">
                                        <span className="social-txt facebook-txt"><RiFacebookFill className="icons facebook-icon" size="24"/> 페이스북 계정으로 신규 가입</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-width">
                        <span className="line-width-txt">OR</span>
                    </div>
                    <div className="form-body">
                        <div className="form-top">
                            <form method="POST" className="regi-form">
                                <div className="form-row">
                                    <div className="text-field">
                                        <input type="email" placeholder="사용하실 ID를 입력해주세요. (수신 가능 E-mail)"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="text-field">
                                        <input type="password" placeholder="영문 대 소문+숫자+특수문자 8~16자리(괄호(), 사용 불가)"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="text-field">
                                        <input type="password" placeholder="패스워드를 다시 입력해 주세요."></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="text-field">
                                        <input type="text" placeholder="이름을 입력해 주세요."></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="text-field">
                                        <input type="number" placeholder="휴대폰 번호 '-'표 없이 입력해 주세요."></input>
                                    </div>
                                </div>
                                {/* 이용약관 */}
                                <div className="form-row">
                                    <div className="regi-terms">
                                        <div className="agree">
                                            <div className="agree-grid">
                                                <h6 className="agree-grid-tit">이용약관</h6>
                                                <a target="_blank" href="https://www.nike.com/kr/ko_kr/cscenter/policy" className="agree-grid-blank">전문보기</a>
                                            </div>
                                            <div className="agree-grid-scroll">
                                                <div className="scroll-box">
                                                    <p><b>나이키 이용약관</b></p>
                                                    <p><b>제 1조 (목적)</b></p>
                                                    <p>
                                                        본 '나이키닷컴 서비스 이용 약관' (이하 "본 약관"이라 합니다)은 이용자가  (유)나이키코리아에서 제공하는 나이키닷컴 사이트 및 사이트 관련 각종 서비스 (이하 "서비스"라 합니다)를 이용함에 있어 "나이키닷컴"과 “이용자”의 권리 의무 및 책임 사항을 규정함을 목적으로 합니다.
                                                    </p>
                                                    <p><b>제 2조 (정의)</b></p>
                                                    <p>본 약관의 주요 용어는 아래와 같이 정의합니다.</p>
                                                    <p>
                                                        ① "NIKE"는 (유)나이키코리아를 말하며 나이키닷컴은 NIKE가 운영하는 공식 온라인 쇼핑몰을 말합니다.
                                                    </p>
                                                    <p>
                                                        ② "서비스"란 나이키닷컴 사이트 및 사이트 관련 각종 서비스를 말합니다.
                                                    </p>
                                                    <p>
                                                        ③ “이용자”란 "사이트"에 접속하여 이 약관에 따라 "나이키닷컴"이 제공하는 “서비스”를 받는 “회원”과 비회원을 말합니다.
                                                    </p>
                                                    <p><b>제 3조 (약관의 게시와 변경)</b></p>
                                                    <p>
                                                    "나이키닷컴"은 이 약관의 내용과 상호, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함)전화번호, 모사전송번호, 이메일 주소, 사업자등록번호, 통신판매업신고번호, 개인정보보호책임자 등을 이용자가 쉽게 알 수 있도록 “나이키닷컴”의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화 면을 통하여 볼 수 있도록 할 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="agree-check">
                                            <label>
                                                <input type="checkbox"></input>
                                                <span> [필수] 약관에 동의 합니다.</span>
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="form-bottom">
                            <div className="agree-info-txt">
                                ※ 약관 및 개인정보 처리방침은 홈페이지 하단에 전문이 게재되어 있습니다.
                            </div>
                            <div className="agree-info-txt">
                                ※ 선택 항목으로 동의하지 않아도 불이익을 받지 않습니다.
                            </div>
                            <div className="agree-info-txt center">
                                만 14세 미만은 회원가입 및 서비스 이용이 불가합니다.
                            </div>
                        </div>
                        <div className="form-btn">
                            <button className="Signup-btn">
                                회원가입하기 (만 14세 이상)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
