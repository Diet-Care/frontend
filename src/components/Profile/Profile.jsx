import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile, setPhoneNumber, setEmail } from "../../redux/actions/actionsProfile";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userProfile, phoneNumber, email } = useSelector((state) => state.profile);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");

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

  return (
    <Container>
      <h1>Profile</h1>
      <Row>
        <Col md={4}>
          <img src={userProfile.profilePicture} alt="Profile" />
        </Col>
        <Col md={8}>
          <h2>Name: {isEditingName ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> : userProfile.name}</h2>
          {isEditingName ? (
            <Button variant="primary" onClick={handleSaveName}>
              Save
            </Button>
          ) : (
            <Button variant="light" onClick={handleEditName}>
              <BsPencilSquare />
            </Button>
          )}
          <h3>Phone Number: {isEditingPhoneNumber ? <input type="text" value={newPhoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} /> : phoneNumber}</h3>
          {isEditingPhoneNumber ? (
            <Button variant="primary" onClick={handleSavePhoneNumber}>
              Save
            </Button>
          ) : (
            <Button variant="light" onClick={handleEditPhoneNumber}>
              <BsPencilSquare />
            </Button>
          )}
          <h3>Email: {isEditingEmail ? <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} /> : email}</h3>
          {isEditingEmail ? (
            <Button variant="primary" onClick={handleSaveEmail}>
              Save
            </Button>
          ) : (
            <Button variant="light" onClick={handleEditEmail}>
              <BsPencilSquare />
            </Button>
          )}
          <Button variant="primary">Change Password</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;