"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBrain,
  faLaptop,
  faKeyboard,
  faTable,
  faChartSimple,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import "../css/nav/nav.css";
function Nav() {
  return (
    <nav className="d-md-none d-sm-none float-start position-absolute top-0 start-0">
      <h1 className="upper txt-blue text-nowrap"># dashmin</h1>
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
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grid-3x3-gap-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
            </svg>
            <h3>widgets</h3>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faKeyboard} />
            <h3>Forms</h3>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faTable} />
            <h3>Tables</h3>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faChartSimple} />
            <h3>Charts</h3>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faFile} />
            <h3>Pages</h3>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
