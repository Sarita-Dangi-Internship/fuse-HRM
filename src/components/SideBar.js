import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants/routesURL";

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
              <span className="sidenav__list__item--icon dashboard-icon"></span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
<<<<<<< HEAD
            <Link to={routes.leaverequest}>
              <span className="sidenav__list__item--icon leave-request-icon">
              </span>
=======
            <Link to="">
              <span className="sidenav__list__item--icon leave-request-icon"></span>
>>>>>>> 7ac2f77391d416091edc432d70af2592fb360cf9
              <span>Leave Request</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
            <Link to={routes.leavedetails}>
              <span className="sidenav__list__item--icon leave-details-icon"></span>
              <span>Leave Details</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
            <Link to={routes.leaveSummary}>
              <span className="sidenav__list__item--icon leave-summary-icon"></span>
              <span>Leave Summary</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
            <Link to={routes.login}>
              <span className="sidenav__list__item--icon leave-summary-icon"></span>
              <span>Login</span>
            </Link>
          </li>
          <li className="sidenav__list__item">
            <Link to={routes.holidayList}>
              <span className="sidenav__list__item--icon leave-summary-icon "></span>
              <span>Holiday List</span>
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}
