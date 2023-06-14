import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile, setPhoneNumber, setEmail, setPassword } from "../../redux/actions/actionsProfile";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import imageProfile from "./asset/profile.png";
import "./style/profile.css"
import Button from "../Button";

const Profile = () => {
  const dispatch = useDispatch();
  const { userProfile, phoneNumber, email } = useSelector((state) => state.profileReducer);

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEditName = () => {
    setIsEditingName(true);
    setNewName(userProfile.name);
  };

  const handleEditPhoneNumber = () => {
    setIsEditingPhoneNumber(true);
    setNewPhoneNumber(phoneNumber);
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
    setNewEmail(email);
  };

  const handleEditPassword = () => {
    setIsEditingPassword(true);
    setNewPassword("");
  };

  const handleSaveName = () => {
    dispatch(setUserProfile({ ...userProfile, name: newName }));
    setIsEditingName(false);
  };

  const handleSavePhoneNumber = () => {
    dispatch(setPhoneNumber(newPhoneNumber));
    setIsEditingPhoneNumber(false);
  };

  const handleSaveEmail = () => {
    dispatch(setEmail(newEmail));
    setIsEditingEmail(false);
  };

  const handleSavePassword = () => {
    dispatch(setPassword(newPassword));
    setIsEditingPassword(false);
  };

  return (
    <Container className="profile col-6">
      <h1>Profile</h1>
      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="text-center">
                {/* ini yg akan dipakai
                <Card.Img variant="top" src={userProfile.profilePicture} alt="Profile" /> ini yg dipakai
                 */}
                {/* ini sebagai contoh */}
                <img src={imageProfile} alt="" />
              </div>
              <Card.Text className="text-justify">
                <div className="text-center">{userProfile.name}</div>
                <div className="text-center">{phoneNumber}</div>
                <div className="text-center">{email}</div>
              </Card.Text>
              <Card.Text>
                Name:{" "}
                {isEditingName ? (
                  <Form.Control
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.name}
                    <Button variant="primary" onClick={handleEditName} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
                )}
                {isEditingName && (
                  <Button variant="primary" onClick={handleSaveName} className="ml-2">
                    Save
                  </Button>
                )}
              </Card.Text>
              <Card.Text>
                Phone Number:{" "}
                {isEditingPhoneNumber ? (
                  <Form.Control
                    type="text"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                  />
                ) : (
                  <>
                    {phoneNumber}
                    <Button variant="primary" onClick={handleEditPhoneNumber} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
                )}
                {isEditingPhoneNumber && (
                  <Button variant="primary" onClick={handleSavePhoneNumber} className="ml-2">
                    Save
                  </Button>
                )}
              </Card.Text>
              <Card.Text>
                Email:{" "}
                {isEditingEmail ? (
                  <Form.Control
                    type="text"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                ) : (
                  <>
                    {email}
                    <Button variant="primary" onClick={handleEditEmail} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
                )}
                {isEditingEmail && (
                  <Button variant="primary" onClick={handleSaveEmail} className="ml-2">
                    Save
                  </Button>
                )}
              </Card.Text>
              <Card.Text>
                Change Password:{" "}
                {isEditingPassword ? (
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                ) : (
                  <Button variant="primary" onClick={handleEditPassword} className="ml-2">
                    <BsPencilSquare />
                  </Button>
                )}
                {isEditingPassword && (
                  <Button variant="primary" onClick={handleSavePassword} className="ml-2">
                    Save
                  </Button>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
