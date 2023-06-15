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

const Account = () => {
  const dispatch = useDispatch();
  const { userProfile, email } = useSelector((state) => state.profileReducer);

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingGender, setIsEditingGender] = useState(false);
  const [isEditingAge, setIsEditingAge] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingClimate, setIsEditingClimate] = useState(false);

  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [newClimate, setNewClimate] = useState(userProfile.climate);

  const handleEditUsername = () => {
    setIsEditingUsername(true);
    setNewUsername(userProfile.username);
  };

  const handleEditName = () => {
    setIsEditingName(true);
    setNewName(userProfile.name);
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
    setNewEmail(email);
  };

  const handleEditGender = () => {
    setIsEditingGender(true);
    setNewGender(userProfile.gender);
  };

  const handleEditAge = () => {
    setIsEditingAge(true);
    setNewAge(userProfile.age);
  };

  const handleEditPassword = () => {
    setIsEditingPassword(true);
    setNewPassword("");
  };

  const handleEditClimate = () => {
    setIsEditingClimate(true);
    setNewClimate(userProfile.climate);
  };
  
  const handleSaveUsername = () => {
    dispatch(setUserProfile({ ...userProfile, username: newUsername }));
    setIsEditingUsername(false);
  };

  const handleSaveName = () => {
    dispatch(setUserProfile({ ...userProfile, name: newName }));
    setIsEditingName(false);
  };

  const handleSaveEmail = () => {
    dispatch(setEmail(newEmail));
    setIsEditingEmail(false);
  };

  const handleSaveGender = () => {
    dispatch(setUserProfile({ ...userProfile, gender: newGender }));
    setIsEditingGender(false);
  };

  const handleSaveAge = () => {
    dispatch(setAge(newAge));
    setIsEditingAge(false);
  };

  const handleSavePassword = () => {
    dispatch(setPassword(newPassword));
    setIsEditingPassword(false);
  };

  const handleSaveClimate = () => {
    dispatch(setUserProfile({ ...userProfile, climate: newClimate }));
    setIsEditingClimate(false);
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
              style={{ width: "150px", height:"150px"}}/>
            </div>

            <div className="text-justify">
              <Card.Text className="text-center text-md-left">
                <span>Username: {userProfile.username}</span>
                <span>Name: {userProfile.name}</span>
                <span>Email: {email}</span>
                <span>Gender: {userProfile.gender}</span>
                <span>Age: {userProfile.age}</span>
                <span>Climate: {userProfile.climate}</span>
              </Card.Text>
            </div>
              <Card.Text>
                Username:{" "}
                {isEditingUsername ? (
                  <Form.Control
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.username}
                    <Button variant="primary" onClick={handleEditUsername} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
                )}
                {isEditingUsername && (
                  <Button variant="primary" onClick={handleSaveUsername} className="ml-2">
                    Save
                  </Button>
                )}
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
                Gender:{" "}
                {isEditingGender ? (
                  <Form.Control
                    type="text"
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.gender}
                    <Button variant="primary" onClick={handleEditGender} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
                )}
                {isEditingGender && (
                  <Button variant="primary" onClick={handleSaveGender} className="ml-2">
                    Save
                  </Button>
                )}
              </Card.Text>
              <Card.Text>
                Age:{" "}
                {isEditingAge ? (
                  <Form.Control
                    type="number"
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                  />
                ) : (
                  <>
                    {userProfile.age}
                    <Button variant="primary" onClick={handleEditAge} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
                )}
                {isEditingAge && (
                  <Button variant="primary" onClick={handleSaveAge} className="ml-2">
                    Save
                  </Button>
                )}
              </Card.Text>
              <Card.Text>
                Climate:{" "}
                {isEditingClimate ? (
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
                    <Button variant="primary" onClick={handleEditClimate} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
                )}
                {isEditingClimate && (
                  <Button variant="primary" onClick={handleSaveClimate} className="ml-2">
                    Save
                  </Button>
                )}
              </Card.Text>
              <Card.Text>
                Password:{" "}
                {isEditingPassword ? (
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                ) : (
                  <>
                    ********
                    <Button variant="primary" onClick={handleEditPassword} className="ml-2">
                      <BsPencilSquare />
                    </Button>
                  </>
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

export default Account;
