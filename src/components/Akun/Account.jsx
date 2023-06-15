import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserProfile,
  setEmail,
  setPassword,
  setAge,
} from "../../redux/actions/actionsProfile";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import imageProfile from "./asset/profile.png";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const dispatch = useDispatch();
  const { userProfile, email } = useSelector((state) => state.profileReducer);
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newClimate, setNewClimate] = useState(userProfile.climate);

  const handleEdit = () => {
    setIsEditing(true);
    setNewAddress(userProfile.address);
    setNewName(userProfile.name);
    setNewEmail(email);
    setNewGender(userProfile.gender);
    setNewAge(userProfile.age);
    setNewPassword("");
    setNewClimate(userProfile.climate);
  };

  const handleSave = () => {
    dispatch(
      setUserProfile({
        ...userProfile,
        address: newAddress,
        name: newName,
        gender: newGender,
        climate: newClimate,
      })
    );
    dispatch(setEmail(newEmail));
    dispatch(setAge(newAge));
    dispatch(setPassword(newPassword));
    setIsEditing(false);
  };

  const climateOptions = [
    "Tropical Climate",
    "Desert Climate",
    "Oceanic Climate",
    "Polar Climate",
    "Monsoon Climate",
    "Humid Continental Climate",
    "Mediterranean Climate",
  ];

  const handleChangePassword = () => {
    navigate("/change-password"); // Replace "/change-password" with the actual URL of the password change page
  };

  return (
    <Container className="profile col-6">
      <h1>Account</h1>
      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={imageProfile}
                  alt="Profile"
                  className="profile-image rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>

              <div className="text-justify">
                <Card.Text className="text-center text-md-left">
                <div className="ml-0">
                    <strong>Name:</strong> {userProfile.name}
                  </div>
                  <div>
                    <strong>Email:</strong> {email}
                  </div>
                  <div>
                    <strong>Gender:</strong> {userProfile.gender}
                  </div>
                  <div>
                    <strong>Age:</strong> {userProfile.age}
                  </div>
                  <div>
                    <strong>Address:</strong> {userProfile.address}
                  </div>
                  <div>
                    <strong>Climate:</strong> {userProfile.climate}
                  </div>
                </Card.Text>
              </div>
              <Card.Text>
                Name:{" "}
                {isEditing ? (
                  <Form.Control
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.name}
                  </>
                )}
              </Card.Text>
              <Card.Text>
                Email:{" "}
                {isEditing ? (
                  <Form.Control
                    type="text"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                ) : (
                  <>
                    {email}
                  </>
                )}
              </Card.Text>
              <Card.Text>
                Gender:{" "}
                {isEditing ? (
                  <Form.Control
                    type="text"
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.gender}
                  </>
                )}
              </Card.Text>
              <Card.Text>
                Age:{" "}
                {isEditing ? (
                  <Form.Control
                    type="number"
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.age}
                  </>
                )}
              </Card.Text>
              <Card.Text>
                Address:{" "}
                {isEditing ? (
                  <Form.Control
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.address}
                  </>
                )}
              </Card.Text>
              <Card.Text>
                Climate:{" "}
                {isEditing ? (
                  <Form.Control
                    as="select"
                    value={newClimate}
                    onChange={(e) => setNewClimate(e.target.value)}
                  >
                    {climateOptions.map((climate) => (
                      <option key={climate}>{climate}</option>
                    ))}
                  </Form.Control>
                ) : (
                  <>
                    {userProfile.climate}
                  </>
                )}
              </Card.Text>
              <div className="text-center">
                {isEditing ? (
                  <Button variant="primary" onClick={handleSave} className="ml-2">
                    Save
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleEdit} className="ml-2">
                    Edit
                  </Button>
                )}
                {!isEditing && (
                  <Button variant="primary" onClick={handleChangePassword} className="ml-2">
                    Change Password
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
