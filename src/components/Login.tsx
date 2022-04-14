import React from 'react';
import '../css/default.css';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login(props: any) {
    // const Login = (props) => {

    const { open, close, Header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        // open이 true면 openModal
        <div className={open ? 'openModal modal' : 'modal'} >
            {open ? (
                <div className='login_form'>
                    <div className='login_contents'>
                        <button type="button" className='btn_close' onClick={close}>X</button>

                        <h2>나이키 로그인</h2>
                        <form action="" name="login" method=''>
                            <div>
                                <div className='user_id_box login_input'>
                                    <input type="text" name="user_id" placeholder='아이디' />
                                </div>
                                <div className='user_pw_box login_input'>
                                    <input type="password" name="user_pw" placeholder='비밀번호' />
                                </div>
                            </div>

                            <div className='login_checkbox clear'>
                                <span>
                                    <input type="checkbox" name="check" id="check" />
                                    <label htmlFor="check"><span>로그인유지하기</span></label>
                                </span>
                                <span className='login_find'><Link to="#">아이디/비밀번호 찾기</Link></span>
                            </div>

                            <div className='btn_login buttons'>
                                <button type='submit'>로그인</button>
                            </div>

                            <div className='social_containner'>
                                <div className='btn_kakao buttons'>
                                    <button type='button'>카카오계정 로그인</button>
                                </div>
                                <div className='btn_facebook buttons'>
                                    <button type='button'>페이스북으로 로그인</button>
                                </div>
                            </div>

                            <div className='join_text'>
                                <span>회원이 아니신가요?</span>
                                <span><Link to="#">회원가입</Link></span>
                            </div>

                            <div>
                                <span><Link to="#">비회원 주문 조회</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
                //false면 안보여야 되니까 null
            ) : null}
        </div>
    )
}




