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
      <div className="layout">
        <div className="nav_bar">
          <p className="title">Leave Summary</p>
          <input type="text" placeholder="Search" className="search"></input>
          <div className="photo_profile"></div>
          <div>
            <p className="employee_name">Employee Name</p>
          </div>
        </div>
        <div className="body">
          <p className="inner_title">Leave Summary</p>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Opening Balance</th>
                <th>Allocated Date</th>
                <th>Accumulation Days</th>
                <th>Accumulation Hours</th>
                <th>Total</th>
                <th>Used</th>
                <th>Balance</th>
              </tr>
            </thead>

            {this.state.users.map((user) => {
              return <tbody>{UserData(user)}</tbody>;
            })}
          </Table>
        </div>
      </div>
    );
  }
}

const UserData = (user) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.opening_bal}</td>
      <td>{user.allocated_date}</td>
      <td>{user.accumulation_days}</td>
      <td>{user.accumulation_hrs}</td>
      <td>{user.total}</td>
      <td>{user.used}</td>
      <td>{user.bal}</td>
    </tr>
  );
};

export default LeaveSummary;
