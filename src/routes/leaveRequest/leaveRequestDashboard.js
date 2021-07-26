import React, { Component } from "react";
import { Button, Modal, Form, Row, Col, Card, ListGroup } from "react-bootstrap";

import Calendar from "./component/Calendar";

class LeaveRequestDashboard extends Component {
  render() {
    return (
      <Row className="LeaveRequestDashboard ">
        <div className="custom-calendar custom-border ">
          <Calendar />
        </div>
        <div>
        <div className="dark-btn leave-btn">
        <Button  variant="primary">Leave Request</Button>
        </div>
        <Card className="custom-border" style={{ width: '350px' }}>
  <Card.Header >Leave Balance</Card.Header>
  <ListGroup variant="flush">
  <ListGroup horizontal className="" >
    <ListGroup.Item className="card-list">Annual Leave</ListGroup.Item>
    <ListGroup.Item className="card-list-number">5.0</ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal className="" >
    <ListGroup.Item className="card-list">Floating Leave</ListGroup.Item>
    <ListGroup.Item className="card-list-number">2.5</ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal className="" >
    <ListGroup.Item className="card-list">Covid Leave</ListGroup.Item>
    <ListGroup.Item className="card-list-number">2.0</ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal className="" >
    <ListGroup.Item className="card-list">Sick Leave</ListGroup.Item>
    <ListGroup.Item className="card-list-number">3.5</ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal className="" >
    <ListGroup.Item className="card-list">Substitute Leave</ListGroup.Item>
    <ListGroup.Item className="card-list-number">0.5</ListGroup.Item>
    </ListGroup>
    
  </ListGroup>
</Card>
</div>

      </Row>
    );
  }
}
export default LeaveRequestDashboard;
