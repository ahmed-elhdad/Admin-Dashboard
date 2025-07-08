import React from "react";

import {
  faBars,
  faEnvelope,
  faCaretDown,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="left">
        <div className="">
          <h1># dashmin</h1>
          <div className="control">
            <button>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <input type="search" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="">
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <div>
            <span>messages</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div className="notification">
          <button>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <div>
            <span>notification</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div>
          <img src="../../public/img/user.jpg" className="rad-6" />
          <div>
            <span>John deo</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
    </header>
  );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default Header;
