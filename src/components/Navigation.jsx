import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "./Button";
import "../style/navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus } from "../redux/actions/actions";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.cekLogin.isLoggedIn);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(setLoginStatus(true));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoginStatus(false));
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="navbar-fix">
      <Container className="nav navbar-nav mt-0 ">
        <Navbar.Brand href="/" className="me-4">
          <img
            src="https://i.ibb.co/mCXdQKm/logo-no-background.png"
            alt="logo-no-background"
            border="0"
            width="100%"
            height={30}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-link-wrapper" navbarScroll>
            <NavLink
              exact="true"
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
          <Nav class="col py-lg-0 py-3 sign d-flex justify-content-lg-end justify-content-center align-items-center gap-2">
            {isLoggedIn ? (
              <Button onClick={handleLogout}>
                <CgProfile /> Profile - Logout
              </Button>
            ) : (
              <>
                <NavLink to="/register" className="signup">
                  <Button>Sign Up</Button>
                </NavLink>
                <NavLink to="/login" className="login">
                  <Button>Login</Button>
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
