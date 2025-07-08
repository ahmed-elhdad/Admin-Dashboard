"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBrain,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="d-flex">
      <div className="profile">
        <img src="../../public/img/user.jpg" alt="" />
        <div className="text">
          <h3>john deo</h3>
          <span>admin</span>
        </div>
      </div>
      <div className="controls">
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faBrain} />
            <h3>Dashboard</h3>
          </div>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faLaptop} />
            <h3>Elements</h3>
          </div>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="d-flex">
          <div></div>
        </div>
        <div className="d-flex">
          <div></div>
        </div>
        <div className="d-flex">
          <div></div>
        </div>
        <div className="d-flex">
          <div></div>
        </div>
        <div className="d-flex">
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
