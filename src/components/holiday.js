import React, { Component } from "react";
import "../styles/main.scss";

export class holiday extends Component {
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
        <div className="holiday_title">
          <h3>Holidays</h3>
          <button className="close_btn">X</button>
        </div>

        {/* Top static line */}
        {TopLine()}

        {/* Actual Holidays */}
        <div className="holidays">
          {this.state.holidays.map((holiday, i) => {
            return (
              <div key={i}>
                <div className="line line_out_box"></div>
                {HolidayBox(holiday)}
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
    <div className="holiday_box">
      <div className="line line_in_box"></div>
      <div>
        <div className="user_name">{holiday.name}</div>
        <div className="date_display">{getFormattedDate(holiday.date)}</div>
        <br></br>
      </div>
    </div>
  );
};

const TopLine = () => {
  return (
    <div className="holidays">
      <div>
        <div className="line circle circle_left "></div>
      </div>
      <div>
        <div className="line circle circle_right"></div>
      </div>
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
export default holiday;
