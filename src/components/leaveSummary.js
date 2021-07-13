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
        {TopPage()}
        <div className="top_page bg_color body">
          <p className="font_body bg_color top_page inner_title">
            Leave Summary
          </p>
          <Table striped bordered className="bg_color">
            {TableHead()}
            {this.state.users.map((user, i) => {
              return <tbody className="font_body">{UserData(user, i)}</tbody>;
            })}
          </Table>
          {Footer()}
        </div>
      </div>
    );
  }
}

const UserData = (user, i) => {
  return (
    <tr key={i}>
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

const TopPage = () => {
  return (
    <div className="nav_bar">
      <p className="top_page title">Leave Summary</p>
      <input
        type="text"
        placeholder="Search"
        className="top_page bg_color search"
      ></input>
      <div className="photo_profile"></div>
      <button className="down_arr">
        <i class="arrow down" />
      </button>
      <div>
        <p className="top_page employee_name">Employee Name</p>
      </div>
    </div>
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
        <th>Total</th>
        <th>Used</th>
        <th>Balance</th>
      </tr>
    </thead>
  );
};

const Footer = () => {
  return (
    <div>
      <a href="#" className="btn_props previous round">
        &#8249;
      </a>
      <a href="#" className="btn_props next round">
        &#8250;
      </a>
      <a href="#" className="btn_props prev_num curved_side">
        1
      </a>
      <p className="txt bg_color">of</p>
      <a href="#" className="btn_props next_num curved_side">
        2
      </a>
    </div>
  );
};
export default LeaveSummary;
