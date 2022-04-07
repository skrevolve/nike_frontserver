import React from 'react';
import '../css/default.css';
import '../css/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="footer_inner">
                    <div className='footer_nav'>
                        <div className="flex">
                            <ul className="footer_info">
                                <li className="mt0"><a href="">매장안내</a></li>
                                <li><a href="">나이키 저널</a></li>
                                <li><a href="">로그인</a></li>
                                <li><a href="">멤버 가입</a></li>
                            </ul>
                            <div className="flex">
                                <dl className="footer_customer">
                                    <dt className="mt0"><a href="">고객센터</a></dt>
                                    <dd><a href="">080-022-0182</a></dd>
                                    <dd><a href="">주문/결제</a></dd>
                                    <dd><a href="">배송</a></dd>
                                    <dd><a href="">주문배송조회</a></dd>
                                    <dd><a href="">멤버쉽 혜택/서비스</a></dd>
                                    <dd><a href="">공지사항</a></dd>
                                    <dd><a href="">1:1 채팅 문의</a></dd>
                                    <dd><a href="">이용약관</a></dd>
                                    <dd><a href=""><strong>개인정보처리방침</strong></a></dd>
                                </dl>
                            </div>
                            <div className="flex">
                                <dl className="footer_about">
                                    <dt className="mt0"><a href="">ABOUT NIKE</a></dt>
                                    <dd><a href="">나이키에 대하여</a></dd>
                                </dl>
                            </div>
                            <div className="flex">
                                <dl className="footer_social">
                                    <dt className="mt0"><a href="">SOCIAL</a></dt>
                                    <dd><a href="">Twitter</a></dd>
                                    <dd><a href="">Facebook</a></dd>
                                    <dd><a href="">Youtube</a></dd>
                                    <dd><a href="">Instagram</a></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_copy clear">
                    <div className="footer_copy_area">
                        <span><a href="">대한민국</a></span>
                        <span className="copyright"> &copy;2022 Nike, Inc. All Rights Reserved</span>
                    </div>
                    <div className="footer_copy_policy">
                        <span><strong>이용약관</strong></span>
                        <span><strong>개인정보처리방침</strong></span>
                    </div>
                </div>
                <div className="address">
                    <div className="footer_inner clear">
                        <address>
                            <span>(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스</span>
                            <span>서울 강남구 테헤란로 152 강남파이낸스센터 30층</span>
                            <span>통신판매업신고번호 2011-서울강남-03461
                                <span className="ib">등록번호 220-88-09068</span>
                                <span className="ib">
                                    <strong>
                                        <a href="">사업자정보확인</a>
                                    </strong>
                                </span>
                            </span>
                            <span>고객센터 전화문의
                                <a href="">080-022-0182</a>
                            </span>
                            <span>FAX 02-6744-5880
                                <span className="ib">E-mail service@nike.co.kr</span>
                                <span className="ib">호스팅서비스사업자 (유)나이키코리아</span>
                            </span>
                        </address>
                        <div className="footer_insurance">
                            <p>안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한</p>
                            <p>KG 이니시스의 구매안전 서비스 (채무지급보증)를 이용하실 수 있습니다.</p>
                            <p className="footer_insurance_info">온라인디지털콘텐츠사업발전법에 의한 <a href="">콘텐츠보호안내 자세히보기</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}