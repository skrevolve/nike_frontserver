import React from "react";
import "../css/default.css";
import "../css/SidebarCustomer.css";
import { Link } from "react-router-dom";

export default function SidebarCustomer() {
  return (
    <>
      <div className="side_wrap">
        <h2 className="side_tit">고객센터</h2>
        <div className="side_sub">
          <ul>
            <li>
              <Link to="/Notice">
                공지사항
              </Link>
            </li>
            <li>           
              <Link to="/OfflineInfo">
                매장안내
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
