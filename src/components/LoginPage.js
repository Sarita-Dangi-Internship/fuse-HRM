import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class Welcome extends Component {
  render() {
    return (
      <div className="loginPage">
        <h1 className="header">
          fuse| <a className="hrm">HRM</a>
        </h1>
        <input placeholder="Username" id="username"></input>
        <input placeholder="Password" id="password"></input>

        <label className="loginPage__rememberMe">
          <input type="checkbox"></input>Remember me
        </label>
        <a id="forgetPassword">Forget your password?</a>
        <button className="loginPage__signIn">Sign In</button>
        <p className="loginPage__orText">or</p>
        <GoogleLogin
          clientId="1058823769266-758kalf90cmirensqppf8qt6rfebpvjs.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="loginPage__loginBtn"
            >
            Sign in with Google
            </button>
          )}
        />
      </div>
    );
  }
}
