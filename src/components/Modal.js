import React from 'react'
import '../css/default.css';
import '../css/Modal.css';

function Modal(props) {

    const { open, close } = props;
    
    return (
        <>
            {open ? (
                <div className='modal'>
                    <div className='modal_content'>
                        <h3>콘텐츠산업진흥법에 의한 표시</h3>
                        <button type="button" onClick={close} className='btn_close'>&#215;</button>
                        <div className='content_text'>
                            <p>콘텐츠의 명칭 : 상품정보 및 이벤트 정보등</p>
                            <p>콘텐츠의 제작 연월일 : 2018년 02월 3일(또는, 콘텐츠가 업그레이드된 경우 그 갱신일)</p>
                            <p>나이키 공식 온라인스토어는 GS SHOP 브리즈커머스(breezecommerce.co.kr)를 이용하고 있습니다.</p>
                            <p>웹페이지 내의 모든 콘텐츠는「콘텐츠산업 진흥법」에 따라 제작일 또는</p>
                            <p>그 갱신일로부터 5년간 보호됩니다.(동의 없는 무단 복제를 금함)</p>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
export default Modal;
