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
    <div className="sidebar">
      <nav className="navbar bg-light float-start position-absolute top-0 start-0 p-3">
        <h1 className="upper txt-blue text-nowrap"># dashmin</h1>
        <div className="profile d-flex justify-content-center align-items-center gap-3">
          <img
            className="rounded-circle"
            src="../../public/img/user.jpg"
            alt=""
          />
          <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          <div className="text d-flex flex-column gap-0">
            <h3 className="capitalize">john deo</h3>
            <span className="capitalize">admin</span>
          </div>
        </div>
        <div className="controls">
          <div className="d-flex gap-3 align-items-center text-center">
            <div>
              <div>
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3>Dashboard</h3>
            </div>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="d-flex gap-3 align-items-center text-center">
            <div>
              <div>
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3>Elements</h3>
            </div>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="d-flex gap-3 align-items-center text-center">
            <div>
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
              </div>
              <h3>widgets</h3>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center text-center">
            <div>
              <div>
                <FontAwesomeIcon icon={faKeyboard} />
              </div>
              <h3>Forms</h3>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center text-center">
            <div>
              <div>
                <FontAwesomeIcon icon={faTable} />
              </div>
              <h3>Tables</h3>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center text-center">
            <div>
              <div>
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <h3>Charts</h3>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center text-center">
            <div>
              <div>
                <FontAwesomeIcon icon={faFile} />
              </div>
              <h3>Pages</h3>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
