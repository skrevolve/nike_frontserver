import React from 'react';
import '../css/default.css';
import '../css/Notice.css';

export default function Notice() {
    return (
        <div className='noticeWrap'>
            <div className='noticeCon'>
                <div>
                    <input type="search" placeholder='검색어를 입력하세요.' name="" id="search"></input>
                    <button type="button" id="btn_search">검색</button>
                    <button type="button" id="btn_create">등록하기</button>
                </div>
                <h2 className='title'>공지사항</h2>
                <table id="notice_board">
                    <colgroup>
                        <col width="15%" />
                        <col width="50%" />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <th>No</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                <div id="paging"></div>
            </div>
        </div>
    )
}

