import React, { Component } from "react";
import { Link } from "react-router-dom";
// import dashboard from "../templates/sidebar/dashboard.svg";
// import leave1 from "../templates/sidebar/leave-request.svg";
// import leave2 from "../templates/sidebar/leave-details.svg";
// import leave3 from "../templates/sidebar/leave-summary.svg";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="sidenav">
        <div className="sidenav__title">
          <h3 className="brand">
            <span>fuse | HRM</span>
          </h3>
        </div>

        <ul className="sidenav__list">
          <li className="sidenav__list__item">
            <a href="">
              <span className="sidenav__list__item--icon dashboard-icon">
                {/* <img src={dashboard} /> */}
              </span>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="sidenav__list__item">
            <a href="">
              <span className="sidenav__list__item--icon leave-request-icon">
                {/* <img src={leave1} /> */}
              </span>
              <span>Leave Request</span>
            </a>
          </li>
          <li className="sidenav__list__item">
            <a href="">
              <span className="sidenav__list__item--icon leave-details-icon">
                {/* <img src={leave2} /> */}
              </span>
              <span>Leave Details</span>
            </a>
          </li>
          <li className="sidenav__list__item">
            <a href="">
              <span className="sidenav__list__item--icon leave-summary-icon">
                {/* <img src={leave3} /> */}
              </span>
              <span>Leave Summary</span>
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}
