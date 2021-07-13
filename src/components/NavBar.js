import React, { Component } from "react";
import profile from "../templates/profile.png";
import edit from "../templates/edit-profile.svg";
import logout from "../templates/logout.svg";

export default class NavBar extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="navbar__title">
            <h1>Dashboard</h1>
          </div>
          <div className="navbar__profile">
            <ul className="profile__detail">
              <li className="profile__detail__item">
                <img src={profile} className="profile__image" />
              </li>
              <li className="profile__detail__item">Employee Name</li>
              <li className="profile__detail__item">
                <i class="fas fa-sort-down"></i>
              </li>
            </ul>

            <div className="profile__operation">
              <ul className="profile__operation__list">
                <li className="profile__operation__item">
                  <span className="profile__operation__item--icon">
                    <img src={edit} />
                  </span>
                  Edit Profile
                </li>
                <li className="profile__operation__item">
                  <span className="profile__operation__item--icon">
                    <img src={logout} />
                  </span>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
