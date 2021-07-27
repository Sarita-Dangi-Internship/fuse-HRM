import React, { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="example-custom-input"
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      ref={ref}
    >
      {value}
      <img
        className="calendar_pic"
        alt="calendar"
        src={"/images/calendar.png"}
      />
    </button>
  ));
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default Calendar;
