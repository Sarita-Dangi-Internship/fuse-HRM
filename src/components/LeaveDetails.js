import React, { Component } from "react";
import BodyTable from "./BodyTable"
export default class LeaveDetails extends Component {
  render() {
    return (
      <div className="leaveDetail">
        <a className="leaveDetail__header" style={{textDecoration:"none"}}>Total Leave</a>
        <div className="leaveDetail__header--line"></div>
        <BodyTable/>
      </div>
    );
  }
}
