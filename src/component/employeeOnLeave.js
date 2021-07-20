import React, { Component } from "react";
import Avatar from "react-avatar";
import profilePic from "../profile_pic.jpg";
import "../styles/main.scss";

export class employeesOnLeave extends Component {
  constructor() {
    super();
    this.state = {
      empOnLeave: [
        { empName: "Ravi Verma", empPos: "Front End Developer" },
        { empName: "Ravi Verma", empPos: "Front End Developer" },
        { empName: "Ravi Verma", empPos: "Front End Developer" },
        { empName: "Ravi Verma", empPos: "Front End Developer" },
        { empName: "Ravi Verma", empPos: "Front End Developer" },
        { empName: "Ravi Verma", empPos: "Front End Developer" },
        { empName: "Ravi Verma", empPos: "Front End Developer" },
        { empName: "Ravi Verma", empPos: "Front End Developer" },
      ],
      pageNum: 1,
      totalPage: 3,
    };
  }
  render() {
    return (
      <div className="employees_on_leave">
        {Header()}
        {topLine()}
        {EmpBox(this.state.empOnLeave)}
        {endLine()}
        {pageNum(this.state)}
      </div>
    );
  }
}

const Header = () => {
  return (
    <div className="title">
      <h3>Employees On Leave</h3>
      <button className="close_btn">X</button>
    </div>
  );
};

const topLine = () => {
  return (
    <div className="emp_on_leave">
      <div>
        <div className="line circle"></div>
      </div>
      <div>
        <div className="line circle"></div>
      </div>
    </div>
  );
};

const EmpBox = (state) => {
  return (
    <div className="emp_on_leave">
      {state.map((emp, i) => {
        return (
          <div key={i}>
            <div
              className={`${
                i === 0 || i === 1 ? "line_first" : "line"
              } line_out_box`}
            ></div>
            <div className="emp_detail">
              <div className="line line_in_box"></div>
              <div className="emp_avatar">
                <div>
                  <Avatar className="avatar" src={profilePic} />
                </div>
                <div className="emp_info">
                  <div>{emp.empName}</div>
                  <div>{emp.empPos}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const endLine = () => {
  return (
    <div className="emp_on_leave">
      <div>
        <div className="line line_end"></div>
      </div>
      <div>
        <div className="line line_end"></div>
      </div>
    </div>
  );
};

const pageNum = (state) => {
  return (
    <div className="page_num">
      <p className="page_title">Pages</p>
      <p className="pages">
        {state.pageNum} / {state.totalPage}
        <a href="/" className=" arrow_btn">
          <i className="arrow left"></i>
        </a>
        <a href="/" className="arrow_btn">
          <i className="arrow right"></i>
        </a>
      </p>
    </div>
  );
};
export default employeesOnLeave;
