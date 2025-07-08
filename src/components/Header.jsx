import React from "react";

import {
  faBars,
  faEnvelope,
  faCaretDown,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "../css/header/header.css";
function Header() {
  return (
    <header className="d-flex justify-content-between position-absolute top-0 end-0 pe-4 float-end">
      <div className="left d-flex flex-row w-100 h-25 gap-5 align-items-center p-2">
        <div className="control d-inline-flex gap-4">
          <button className="btn rounded-full btn-square txt-blue fw-bolder">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <input
            className="rounded border-0 p-2 outline-none"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="right d-flex justify-content-center align-items-center gap-4">
        <div className="messages d-flex justify-content-between align-items-center gap-2 txt-black capitalize">
          <button className="btn btn-square rounded-circle">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <span>messages</span>
          <button className="bg-transparent border-0 txt-black">
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
        <div className="notification d-flex justify-content-between align-items-center gap-2 txt-black capitalize">
          <button className="btn btn-square rounded-circle">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <span>notification</span>
          <button className="bg-transparent border-0 txt-black">
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
        <div className="profile d-flex justify-content-between align-items-center gap-2 txt-black capitalize w-100 text-nowrap">
          <img src="../../public/img/user.jpg" className="rounded-circle" />
          <span>John deo</span>
          <button className="bg-transparent border-0 txt-black">
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      </div>
    </header>
  );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default Header;
