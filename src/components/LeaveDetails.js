import React, { Component } from "react";
import BodyTable from'./BodyTable';
export default class LoginPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="leaveDetail">
            <a className="leaveDetail__header">Total Leave</a>
            <div className="leaveDetail--line"></div>
            <BodyTable />
        </div>
      </div>
    );
  }
}
