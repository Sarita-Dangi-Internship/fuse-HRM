import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "../styles/main.scss";

export class LeaveSummary extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Annual Leave",
          allocated_days: 4.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Floating Leave",
          allocated_days: 4.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Substitute Leave",
          allocated_days: 4.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Sick Leave",
          allocated_days: 4.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Covid Leave",
          allocated_days: 4.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
      ],
      pageNum: 1,
    };
  }
  render() {
    return (
      <div>
        <div className="header">
          <p className="title font_style">Leave Summary</p>
        </div>
        <div className="body">
          <Table striped borderless>
            {/* Head of table */}
            {TableHead()}
            {/* Body of Table */}
            {TableBody(this.state)}
          </Table>
          {/* Pagination buttons */}
          {Footer(this.state)}
        </div>
      </div>
    );
  }
}

const TableHead = () => {
  return (
    <thead>
      <tr className="font_style">
        <th>Name</th>
        <th>Allocated Days</th>
        <th>Total</th>
        <th>Used</th>
        <th>Balance</th>
      </tr>
    </thead>
  );
};

const TableBody = (state) => {
  return (
    <tbody>
      {state.users.map((user, i) => {
        return (
          <tr className="font_style" key={i}>
            <td>{user.name}</td>
            <td>{user.allocated_days.toFixed(1)}</td>
            <td>{user.total.toFixed(1)}</td>
            <td>{user.used.toFixed(1)}</td>
            <td>{user.bal.toFixed(1)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

const Footer = (state) => {
  return (
    <div className="btn_props">
      <a href="/" className=" arrow_btn">
        <i className="arrow left"></i>
      </a>
      <a href="/" className="curved_side">
        {state.pageNum}
      </a>
      <p className="txt font_style">of</p>
      <a href="/" className="curved_side">
        {state.pageNum + 1}
      </a>
      <a href="/" className="arrow_btn">
        <i className="arrow right"></i>
      </a>
    </div>
  );
};

export default LeaveSummary;
