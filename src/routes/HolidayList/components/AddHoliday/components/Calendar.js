import React, { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const Input = ({ value, onClick, id, placeholder }) => (
    <>
      <input
        placeholder={placeholder}
        value={value}
        id={id}
        onClick={onClick}
      />
      <img
        className="calendar_pic"
        alt="calendar"
        src={"/images/calendar.png"}
        onClick={onClick}
      />
    </>
  );
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<Input />}
    />
  );
};

export default Calendar;
