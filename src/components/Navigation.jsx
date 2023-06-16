import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "./Button";
import "../style/navigation.css";
import { setLoginStatus } from "../redux/actions/actions";
import axios from "axios";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.cekLogin.isLoggedIn);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(setLoginStatus(true));
      fetchUserName();
    }
  }, []);

  const fetchUserName = async () => {
    try {
      const response = await axios.get(
        "https://backend-production-2c47.up.railway.app/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const loggedInUser = response.data.data.find(
        (user) => user.email === token
      );
      if (loggedInUser) {
        setUserName(loggedInUser.uuid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar expand="lg" className="navbar-fix">
      <Container className="nav navbar-nav mt-0  ">
        <div className="navbar-wrapper me-4">
          <Navbar.Brand href="/">
            <img
              src="https://i.ibb.co/mCXdQKm/logo-no-background.png"
              alt="logo-no-background"
              border="0"
              width="100%"
              height={25}
            />
          </Navbar.Brand>
          <Navbar.Toggle className="toggle"
            aria-controls="navbarScroll"
            children={<i class="fa-solid fa-bars"></i>}
          />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-link-wrapper" navbarScroll>
            <NavLink
              exact={true}
              to="/"
              activeClassName="active"
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/hitung-kalori"
              activeClassName="active"
              className="nav-link"
            >
              Diet
            </NavLink>
            <NavLink
              to="/edukasi"
              activeClassName="active"
              className="nav-link"
            >
              Edukasi
            </NavLink>
            <NavLink
              to="/about-us"
              activeClassName="active"
              className="nav-link"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link"
            >
              Contact
            </NavLink>
            <NavLink to="/admin" activeClassName="active" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav className="col py-lg-0 py-3 sign d-flex justify-content-lg-end justify-content-center align-items-center gap-2">
            {isLoggedIn ? (
              <NavLink to="/profile" className="profile-link">
                <Button variant="primary">
                  <CgProfile />
                  {userName ? userName : "Profile"}
                </Button>
              </NavLink>
            ) : (
              <>
                <NavLink to="/register" className="signup">
                  <Button variant="primary">Sign Up</Button>
                </NavLink>
                <NavLink to="/login" className="login">
                  <Button variant="secondary">Login</Button>
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
