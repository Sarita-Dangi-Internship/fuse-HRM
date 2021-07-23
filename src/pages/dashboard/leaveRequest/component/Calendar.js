import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
    useWeekdaysShort={true}
      selected={startDate}
      onChange={onChange}
      
      selectsRange
      inline
      renderCustomHeader={({
        date,
        monthDate,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          className="date-header"
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <div>
            <button
              className="arrow-btn"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {
                <svg
                  width="34"
                  height="22"
                  viewBox="0 0 34 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L32.3193 11M2 11L6.47899 15.5L10.958 20M2 11L6.47899 6.5L10.958 2"
                    stroke="#404245"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            </button>
          </div>
          <div>
            <span className="date-title">{moment(monthDate).format("MMMM")}</span>
            <span className="date-title">{moment(date).format("YYYY")}</span>
          </div>
          <div>
            <button
              className="arrow-btn"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {
                <svg
                  width="34"
                  height="22"
                  viewBox="0 0 34 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 11L1.68067 11M32 11L27.521 15.5L23.042 20M32 11L27.521 6.5L23.042 2"
                    stroke="#404245"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            </button>
          </div>
        </div>
      )}
    />
  );
};

export default Calendar;
