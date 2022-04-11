import React from 'react';
import '../css/default.css';
import '../css/Login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSmile } from '@fortawesome/free-solid-svg-icons';


export default function Login() {
    return (
        <div className='login'>
            <div className='login_form'>
                <div className='login_contents'>
                    {/* <button type="button" className='btn_close'>X</button> */}
                    <div className='btn_close'>X</div>
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
                            <span className='login_find'><a href="">아이디/비밀번호 찾기</a></span>
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

                        <div>
                            <span>회원이 아니신가요?</span>
                            <span><a href="">회원가입</a></span>
                        </div>

                        <div>
                            <span>비회원 주문 조회</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

