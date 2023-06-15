import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import imageProfile from "./asset/profile.png";
import Button from "../Button";
import "./style/profile.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { userProfile } = useSelector((state) => state.profileReducer);
  // const { name, email } = userProfile;

  return (
    <Container>
      <h1>Profile</h1>
      <Row className="mt-4 justify-content-center">
        <Col md={5}>
          <Card>
            <div className="text-center">
              <Card.Img
                variant="top"
                src={imageProfile}
                alt="Profile"
                className="profile-image rounded-circle"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <Card.Body>
              <div className="text-center">
                {/* <Card.Title>{name}</Card.Title> */}
                {/* <Card.Text>Email: {email}</Card.Text> */}
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/account">
                  <Button variant="primary">Account</Button>
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/schedule">
                  <Button variant="primary">Schedule</Button>
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
