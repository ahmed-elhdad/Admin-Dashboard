import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartSimple,
  faChartPie,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

function Fluid() {
  return (
    <div className="fluid-container d-flex justify-content-center align-items-center">
      <div className="d-flex">
        <div>
          <FontAwesomeIcon icon={faChartSimple} />
        </div>
        <div>
          <span>Today Sale</span>
          <h6>$1234</h6>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <div>
          <span>Total sale</span>
          <h6>$1234</h6>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <FontAwesomeIcon icon={faChartArea} />
        </div>
        <div>
          <span>Today Revenue</span>
          <h6>$1234</h6>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <FontAwesomeIcon icon={faChartPie} />
        </div>
        <div>
          <span>Total Revenue</span>
          <h6>$1234</h6>
        </div>
      </div>
    </div>
  );
}

export default Fluid;
