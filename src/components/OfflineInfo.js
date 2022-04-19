import React from 'react'
import '../css/default.css'
import '../css/OfflineInfo.css'
import { RiAddCircleLine } from "react-icons/ri";


function OfflineInfo() {
    return (
        <div className='offlineInfo_wrap'>
            <div className='offlineInfo'>

                <h2 className='title'>오프라인 매장 안내</h2>

                <div className='btn_offline'>
                    <button type="button" className='btn_follow'>팔로우</button>
                    <button type="button" id="btn_create" className="btnCreate">
                        <RiAddCircleLine size="15" />
                        <span>등록</span>
                    </button>
                </div>

                <div id="offlineBoard">
                    <table>
                        <colgroup>
                            <col width="100%"/>
                        </colgroup>

                        <tbody>
                            <tr>
                                <td>1234</td>
                            </tr>
                            <tr>
                                <td>1234</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="form">
                <form name="" action='' method='post'>
                    <button type="button" className="btnCancel">취소</button>
                    <button type="button" className="btnCreate">등록</button>
                    <button type="button" className="btnUpdate">수정</button>
                        <table id="">
                            <tbody>
                                <tr>
                                    <th>등록번호</th>
                                    <td id="form_id"></td>
                                </tr>
                                <tr>
                                    <th>제목</th>
                                    <td><input type="text" name="title" /></td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td><textarea name="content"></textarea></td>
                                </tr>
                                <tr>
                                    <th>글쓴이</th>
                                    <td><input type="text" name="writer" /></td>
                                </tr>
                                <tr>
                                    <th>작성일</th>
                                    <td><input type="date" name="regdate" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default OfflineInfo;
