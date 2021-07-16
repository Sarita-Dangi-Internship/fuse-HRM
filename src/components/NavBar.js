import React, { Component } from "react";
import profile from "../templates/profile.png";
import edit from "../templates/edit-profile.svg";
import logout from "../templates/logout.svg";
import searchicon from "../templates/search-icon.png";

export default class NavBar extends Component {
  state = {
    dropdownShown: false,
  };

  handleDropDownShown = () => {
    const currentState = this.state.dropdownShown;
    this.setState({ dropdownShown: !currentState });
  };

  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="navbar__title">
            <h1>Dashboard</h1>
          </div>
          <div className="navbar__search">
            <img className="navbar__search--icon" src={searchicon} />
            <input type="search" placeholder="search" />
          </div>
          <div className="navbar__profile">
            <ul className="profile__detail">
              <li className="profile__detail__item">
                <img src={profile} className="profile__image" />
              </li>
              <li className="profile__detail__item">Employee Name</li>
              <li className="profile__detail__item">
                <i
                  class="fas fa-sort-down"
                  onClick={() => this.handleDropDownShown()}
                ></i>
              </li>
            </ul>

            {this.state.dropdownShown && (
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
            )}
          </div>
        </nav>
      </header>
    );
  }
}
