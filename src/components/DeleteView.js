import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class DeleteView extends Component {
  render() {
    return (
      <div className="LeaveRequest updateProfile">
        <Modal show={true} size="lg" className=".modal-backdrop modal-profile">
          <Modal.Header className="leaveRequest-header" >
            <Modal.Title>Confirm Delete</Modal.Title>
            <button type="button" class="close-btn" aria-label="Close" closeButton></button>
          </Modal.Header>

          <Modal.Body>
            <div className="confirm-message">
                <p> Are you sure you want to delete this request ?</p>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Cancel</Button>
            <Button className="delete-confirm-btn" variant="primary">Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default DeleteView;
