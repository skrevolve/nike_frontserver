import React, { Component } from 'react'
// import React from 'react';
import '../css/default.css';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { RiFacebookFill } from 'react-icons/ri';
import logo from "../images/logo1.png";



class Login extends Component {
    render() {
        // Header에서 가져온 props
        const { open, close } = this.props;
        //  function Login() {
        return (
            <>
                {open ? (
                    <div className='login'>
                        <div onClick={close}> {/* 배경을 눌러도 창 꺼짐 */}
                            <div className='login_form'>
                                <img src={logo} alt="logo" className="top-logo" />
                                <button type="button" onClick={close} className='btn_close'>&#215;</button>
                                <div className='login_contents' onClick={open}>
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
                                            {/* <span className='login_find'><Link to="">아이디/비밀번호 찾기</Link></span> */}
                                        </div>

                                        <div className='btn_login buttons'>
                                            <button type='submit'>로그인</button>
                                        </div>

                                        <div className='social_containner'>
                                            <div className='btn_kakao buttons'>
                                                <button type='button'><RiKakaoTalkFill className="icons kakao-icon" size="24"/> <span>카카오계정 로그인</span> </button>
                                            </div>
                                        </div>

                                        <div className='social_containner'>
                                            <div className='btn_facebook buttons'>
                                                <button type='button'><RiFacebookFill className="icons facebook-icon" size="24"/> <span>페이스북으로 로그인</span> </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        )
    }
}
export default Login;



