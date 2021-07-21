import React, { Component } from "react";
import "../styles/main.scss";

export class adminHolidayList extends Component {
  constructor() {
    super();
    this.state = {
      holidays: [
        {
          name: "New Years Day",
          date: new Date(),
        },
        {
          name: "New Years Day",
          date: new Date(),
        },
        {
          name: "New Years Day",
          date: new Date(),
        },
        {
          name: "New Years Day",
          date: new Date(),
        },
        {
          name: "New Years Day",
          date: new Date(),
        },
        {
          name: "New Years Day",
          date: new Date(),
        },
        {
          name: "New Years Day",
          date: new Date(),
        },
        {
          name: "New Years Day",
          date: new Date(),
        },
      ],
      pageNum: 1,
      totalPage: 3,
    };
  }
  render() {
    return (
      <div className="holiday">
        <div>
          <h3 className="title">Holiday List</h3>
        </div>

        <button className="add_btn">+Add</button>
        {/* Top static line */}
        {TopLine()}

        {/* Actual Holidays */}
        <div className="holidays">
          {this.state.holidays.map((holiday, i) => {
            return (
              <div key={i}>
                <div
                  className={`line ${
                    i === 0 || i % 2 === 0
                      ? "line_out_box_left"
                      : "line_out_box_right"
                  }`}
                ></div>
                <div
                  className={`holiday_box ${
                    i === 0 || i % 2 === 0
                      ? "holiday_box_left"
                      : "holiday_box_right"
                  }`}
                >
                  <div className="line line_in_box"></div>
                  {HolidayBox(holiday)}
                </div>
              </div>
            );
          })}
        </div>
        {endLine()}
        {pageNum(this.state)}
      </div>
    );
  }
}

const HolidayBox = (holiday) => {
  return (
    <div>
      <div className="user_name">
        {holiday.name} <button className="close_btn">x</button>
      </div>
      <div className="user_name user_date">
        {getFormattedDate(holiday.date)}
      </div>
      <br></br>
    </div>
  );
};

const TopLine = () => {
  return (
    <div className="holidays">
      <div className="line circle circle_left"></div>
      <div className="line circle circle_right"></div>
    </div>
  );
};

const getFormattedDate = (date) => {
  let year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();

  let day = date.getDate().toString();

  return month + "/" + day + "/" + year;
};

const endLine = () => {
  return (
    <div className="holidays">
      <div>
        <div className="line line_end line_end_left"></div>
      </div>
      <div>
        <div className="line line_end line_end_right"></div>
      </div>
    </div>
  );
};

const pageNum = (state) => {
  return (
    <div className="page_num">
      <p className="page_title">Pages</p>
      <p className="pages">
        {state.pageNum}/{state.totalPage}
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

export default adminHolidayList;
