import React, { Component } from "react";
import profile from "../templates/profile.png";
import edit from "../templates/edit-profile.svg";
import logout from "../templates/logout.svg";
import { GoogleLogout } from "react-google-login";
import config from './../config/index';
import { removeToken } from "../utils/token";
import { Redirect } from "react-router";
import { routes } from './../constants/routesURL';


export default class NavBar extends Component {
  state = {
    dropdownShown: false,
  };

  handleDropDownShown = () => {
    const currentState = this.state.dropdownShown;
    this.setState({ dropdownShown: !currentState });
  };

  logout = () => {
    removeToken();
    <Redirect to={routes.login} />;
  }

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
                    <GoogleLogout
                      clientId={config.clientID}
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          className="logout-btn"
                        >
                          Logout
                        </button>
                      )}
                      onLogoutSuccess={logout}
                    ></GoogleLogout>

                    {/* Logout */}
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
