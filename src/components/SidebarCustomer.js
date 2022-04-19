import React from "react";
import "../css/default.css";
import "../css/SidebarCustomer.css";

export default function SidebarCustomer() {
  return (
    <>
      <div className="side_wrap">
        <h2 className="side_tit">고객센터</h2>
        <div className="side_sub">
          <ul>
            <li>
              <a href="">공지사항</a>
            </li>
            <li>
              <a href="">매장안내</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
