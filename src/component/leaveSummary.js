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
            <thead>
              <tr className="font_style">
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
            <tbody>
              {this.state.users.map((user) => {
                return (
                  <tr className="font_style">
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
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default LeaveSummary;
