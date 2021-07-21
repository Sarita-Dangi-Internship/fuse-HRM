import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";


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
            <Link to={routes.dashboard}>
              <span className="sidenav__list__item--icon dashboard-icon">
              </span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
            <Link to={routes.leaverequest}>
              <span className="sidenav__list__item--icon leave-request-icon">
              </span>
              <span>Leave Request</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
            <Link to="">
              <span className="sidenav__list__item--icon leave-details-icon">
              </span>
              <span>Leave Details</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
            <Link to="">
              <span className="sidenav__list__item--icon leave-summary-icon">
              </span>
              <span>Leave Summary</span>
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}
