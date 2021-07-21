import React, { Component } from "react";
import "../styles/main.scss";

export default class Modal extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal_wrapper">
        <div className="modal_header">
          <p className="modal_title">Add Holiday</p>
          <button className="close_modal_btn" onClick={this.onClose}>
            x
          </button>
        </div>
        <div className="modal_content">
          <div className="modal_body">
            <p className="holiday_date_title">Holiday Date</p>
            <div className="calendar">
              {this.props.holidays.map((holiday) => {
                return holiday.name;
              })}
            </div>
            <p className="holiday_desc_title">Holiday Description</p>
            <div>
              <input
                type="text-field"
                className="holiday_desc"
                placeholder={this.props.holidays.map((holiday, i) => {
                  return holiday.name;
                })}
              ></input>
            </div>
          </div>
          <div className="modal_footer">
            <p className="btn_cancel">Cancel</p>
            <button className="add_holiday_btn">Add</button>
          </div>
        </div>
      </div>
    );
  }
}
