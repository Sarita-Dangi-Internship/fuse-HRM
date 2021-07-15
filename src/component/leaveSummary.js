import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "../styles/main.scss";

export class LeaveSummary extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Niren Shah",
          opening_bal: 0.0,
          allocated_date: 4.0,
          accumulation_days: 4.0,
          accumulation_hrs: 4.0,
          adjusted: 1.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Niren Shah",
          opening_bal: 0.0,
          allocated_date: 4.0,
          accumulation_days: 4.0,
          accumulation_hrs: 4.0,
          adjusted: 1.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Niren Shah",
          opening_bal: 0.0,
          allocated_date: 4.0,
          accumulation_days: 4.0,
          accumulation_hrs: 4.0,
          adjusted: 1.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Niren Shah",
          opening_bal: 0.0,
          allocated_date: 4.0,
          accumulation_days: 4.0,
          accumulation_hrs: 4.0,
          adjusted: 1.0,
          total: 8.5,
          used: 3.5,
          bal: 2.5,
        },
        {
          name: "Niren Shah",
          opening_bal: 0.0,
          allocated_date: 4.0,
          accumulation_days: 4.0,
          accumulation_hrs: 4.0,
          adjusted: 1.0,
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
        {/* Body */}
        <div className="top_page body">
          <p className="font_body top_page inner_title">Leave Summary</p>
          {/* Table */}
          <Table striped borderless>
            {TableHead()}
            {this.state.users.map((user, i) => {
              // i % 4 ? this.setState(this.state.users.pageNum, 1) : "";
              return (
                <tbody className="font_body" key={i}>
                  {UserData(user)}
                </tbody>
              );
            })}
          </Table>
          {/* Page Number */}
          {Footer(this.state)}
        </div>
      </div>
    );
  }
}

const UserData = (user) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.opening_bal.toFixed(1)}</td>
      <td>{user.allocated_date.toFixed(1)}</td>
      <td>{user.accumulation_days.toFixed(1)}</td>
      <td>{user.accumulation_hrs.toFixed(1)}</td>
      <td>{user.adjusted.toFixed(1)}</td>
      <td>{user.total.toFixed(1)}</td>
      <td>{user.used.toFixed(1)}</td>
      <td>{user.bal.toFixed(1)}</td>
    </tr>
  );
};

const TableHead = () => {
  return (
    <thead className="font_body">
      <tr>
        <th>Name</th>
        <th>Opening Balance</th>
        <th>Allocated Date</th>
        <th>Accumulation Days</th>
        <th>Accumulation Hours</th>
        <th>Adjusted</th>
        <th>Total</th>
        <th>Used</th>
        <th>Balance</th>
      </tr>
    </thead>
  );
};

const Footer = (state) => {
  return (
    <div>
      <a href="/" className="btn_props previous round">
        &#8249;
      </a>
      <a href="/" className="btn_props next round">
        &#8250;
      </a>
      <a href="/" className="btn_props prev_num curved_side">
        {state.pageNum}
      </a>
      <p className="txt">of</p>
      <a href="/" className="btn_props next_num curved_side">
        {state.pageNum + 1}
      </a>
    </div>
  );
};
export default LeaveSummary;
