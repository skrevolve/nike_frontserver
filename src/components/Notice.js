import React from "react";
import "../css/default.css";
import "../css/Notice.css";
import { RiSearchLine } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";

export default function Notice() {
  return (
    <div className="noticeWrap">
      <div className="noticeCon">
        <div className="srch_wrap">
          <input
            type="search"
            placeholder="검색어를 입력하세요."
            name=""
            id="srch"
            maxLength={50}
          />
          <button type="button" id="btn_srch">
            <span className="blind">검색</span>
            <RiSearchLine size="22" />
          </button>
        </div>
        <div className="title_wrap">
          <h2 className="title">공지사항</h2>
          <button type="button" id="btn_create" className="btn_create">
            <RiAddCircleLine size="22" />
            <span>등록</span>
          </button>
        </div>
        <table id="notice_board">
          <colgroup>
            <col width="100%" />
          </colgroup>
          <thead>
            <th>고객알림</th>
          </thead>
          <tbody>
            <tr>
              <td>신발 안에 종이 속지가 없이 제품이 배송되었어요</td>
            </tr>
            <tr>
              <td>2022년 4월 무이자 할부 혜택 안내</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
