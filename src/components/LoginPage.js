import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { setToken, getToken } from "../utils/token";
import config from "../config";

export default class LoginPage extends Component {
  render() {
    const login = (res) => {
      console.log(res);
      setToken(res.tokenId);
    };
    return (
      <div className="wrapper">
        <div className="loginPage">
          <div className="header">
            <a className="header-text">fuse </a>
            <a className="hrm">| HRM</a>
          </div>
          <div className="loginPage__form">
            <img src="user.svg" id="userIcon" />
            <input placeholder="Username" id="username"></input> <br />
            <img src="lock.svg" id="lockIcon" />
            <input placeholder="Password" id="password"></input>
          </div>
          <div className="loginPage__reminders">
            <input type="checkbox" id="loginPage-checkbox"></input>
            <label className="rememberMe">Remember me</label>
            <a id="forgetPassword">Forgot your password?</a>
          </div>

          <button className="loginPage__signInBtn">Sign In</button>
          <div className="loginPage__orText">
            <div className="line-left"></div>
            <a>or</a>
            <div className="line-right"></div>
          </div>
          <div className="loginPage__signBtnGoogle">
            <img src="google.svg" className="google-img"></img>
            <GoogleLogin
              clientId={config.clientID}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="signWithGoogleBtn"
                >
                  Sign In with Google
                </button>
              )}
              onSuccess={login}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    );
  }
}
