import React, { Component } from "react";
import BodyTable from "./BodyTable";
export default class LoginPage extends Component {
  render() {
    return (
          <div className="leaveDetail">
            <a className="leaveDetail__header">Total Leave</a>
            <div className="leaveDetail__header--line"></div>
            <BodyTable />
      </div>
    );
  }
}
