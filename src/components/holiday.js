import React, { Component } from "react";
import "../styling/holidays.css";

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
    };
  }
  render() {
    return (
      <div className="holiday">
        <div className="title">
          <h3>Holidays</h3>
          <button className="close_btn">x</button>
        </div>

        {/* Top static line */}
        {TopLine()}

        {/* Actual Holidays */}
        <div className="holidays">
          {this.state.holidays.map((holiday, i) => {
            return (
              <div>
                {HolidayBox(holiday)}
                <div className="line line_out_box"></div>
              </div>
            );
          })}
        </div>

        {endLine()}
      </div>
    );
  }
}

const HolidayBox = (holiday) => {
  return (
    <div className="holiday_box">
      <span className="line line_in_box"></span>
      <div>
        <div>{holiday.name}</div>
        <div>{holiday.date.toUTCString()}</div>
        <br></br>
      </div>
    </div>
  );
};

const TopLine = () => {
  return (
    <div className="holidays">
      <div>
        <div className="line circle"></div>
        <div className="line line_out_box"></div>
      </div>
      <div>
        <div className="line circle"></div>
        <div className="line line_out_box"></div>
      </div>
    </div>
  );
};

const endLine = () => {
  return (
    <div className="holidays">
      <span className="line line_end"></span>
      <span className="line line_end"></span>
    </div>
  );
};

export default holiday;
