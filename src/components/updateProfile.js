import logo from "../images/ladyloki1.png";
import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Container, Button, Modal, Form, Row, Col } from "react-bootstrap";

class updateProfile extends Component {
  render() {
    return (
      
        <div className="updateProfile">
  
    <Modal show={true} size="lg"  className=".modal-backdrop modal-profile">
          <Modal.Header>
            <Modal.Title>Update Profile</Modal.Title>
            <button type="button" class="close-btn" aria-label="Close" closeButton></button>
          </Modal.Header>

          <Modal.Body>
            <div className="profile-upload">
              <div >
                <img src={logo} className="profilepic" alt="" />
              </div>
              <div className="upload-title">
                <div >
                  <h5>Upload Profile Picture</h5>
                </div>
                <div>
                  <Button variant="primary" className="upload-button">
                    <i class="fas fa-cloud-upload-alt"></i> Upload
                  </Button>
                </div>
              </div>
            </div>

            <Form className="upload-form">
              <Row >
                <Form.Group as={Col}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="name" placeholder="John Doe" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Department</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Management</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row className="">
                <Form.Group as={Col}>
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                  className="form-control-big" 
                    type="name"
                    placeholder="I am John Doe and I work as an HR"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Designation</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>HR</option>
                    <option>QA</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row className="">
              <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="johndoe@gmail.com" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Date Joined</Form.Label>
                  <Form.Control type="date" placeholder="5/5/2020" />
                </Form.Group>
              </Row>
              <Row className="">
              <Form.Group as={Col}>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="number" placeholder="9849661192" />
                </Form.Group>
                \
              </Row>
            </Form>
          </Modal.Body>

          <Modal.Footer className="dark-btn">
            <Button  variant="secondary">Cancel</Button>
            <Button className="dark-btn" variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
    
</div>
        
      
    );
  }
}
export default updateProfile;
