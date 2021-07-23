import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class leaveRequest extends Component {
  render() {
    return (
      <div className="LeaveRequest updateProfile">
        <Modal show={true} size="lg" className=".modal-backdrop modal-profile">
          <Modal.Header className="leaveRequest-header" >
            <Modal.Title>Leave Request</Modal.Title>
            <button type="button" class="close-btn" aria-label="Close" closeButton></button>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Row >
                <Form.Group as={Col}  md={6}>
                  <Form.Label>From(AD)</Form.Label>
                  <Form.Control type="name" placeholder="John Doe" />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>TO(AD)</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row >
                <Form.Group as={Col}>
                  <Form.Label>Leave Reason</Form.Label>
                  <Form.Control
                    className="form-control-textfield"
                    as="textarea"
                    placeholder="Personal Work"
                  />
                </Form.Group>
              </Row>
              <Row >
                <Form.Group as={Col}>
                  <Form.Label>Leaves</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>HR</option>
                    <option>QA</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Leave Type</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>HR</option>
                    <option>QA</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <div className="formCheck-text">
              <div>Substitute</div>
              <Form.Check
                type="switch"
                id="custom-switch"
                label=""
                className=""
              /> 
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default leaveRequest;
