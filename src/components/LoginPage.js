import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class Welcome extends Component {
  render() {
    return (
      <div className="loginPage">
        <div className="header-text">
          <a className="header">fuse </a>
          <a className="hrm">| HRM</a>
        </div>
        <div className="loginPage__form">
          <img src="user.png" id="userIcon"/>
          <input placeholder="Username" id="username"></input> <br />
          <img src="lock.png" id="lockIcon"/>
          <input placeholder="Password" id="password"></input>
        </div>
        <div className="loginPage__reminders">
          <label className="loginPage__rememberMe">
            <input type="checkbox"></input>Remember me
          </label>
          <a id="forgetPassword">Forgot your password?</a>
        </div>

        <button className="loginPage__signIn">Sign In</button>
        <p className="loginPage__orText">or</p>
        <div className="loginPage__signBtn">
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            cookiePolicy={"single_host_origin"}
            className="loginPage__signWithGoogleBtn"
          />
        </div>
      </div>
    );
  }
}
