import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassword } from "../../redux/actions/actionsProfile";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./style/changepassword.css"

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password change
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Dispatch password change action
    dispatch(setPassword(newPassword));

    // Reset form fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");

    // Navigate back to profile page
    navigate("/profile");
  };

  return (
    <Container className="change-password col-6">
      <h1>Change Password</h1>
      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center changepassword" >
              <Form.Label>Change Password</Form.Label>
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="currentPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                {error && <p className="text-danger">{error}</p>}
                <div className="text-center">
                  <Button type="submit" variant="primary">
                    Change Password
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
