import React, { Component } from "react";
import { Col, Form, Modal } from "react-bootstrap";
import "../styles/main.scss";
import calendarPic from "../calendar.png";
import Calendar from "./Calendar";

export default class addHoliday extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal_wrapper">
        <Modal show={true} size="lg" centered>
          <Modal.Header className="modal_header">
            <Modal.Title className="modal_title">Add Holiday</Modal.Title>
            <button className="close_modal_btn" onClick={this.onClose}>
              &times;
            </button>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group as={Col} md={6}>
                <Form.Label className="holiday_date_title">
                  Holiday Date
                </Form.Label>
                <div className="calendar">
                  <Calendar />
                  <img
                    className="calendar_pic"
                    alt="calendar"
                    src={calendarPic}
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="holiday_desc_title">
                  Holiday Description
                </Form.Label>
                <Form.Control
                  className="holiday_desc"
                  as="textarea"
                  defaultValue={this.props.holidays[0].name}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer className="modal_footer">
            <p className="btn_cancel" onClick={this.onClose}>
              Cancel
            </p>
            <button className="add_holiday_btn">Add</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
