import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import Button from "../Button"
import "../../style/navigation.css";

const Navigation = () => {
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
            <NavLink exact="true" to="/" activeclassname="active" className="nav-link">
              Home
            </NavLink>
            <NavLink
              to="/hitung-kalori"
              activeclassname="active"
              className="nav-link"
            >
              Diet
            </NavLink>
            <NavLink
              to="/edukasi"
              activeclassname="active"
              className="nav-link"
            >
              Edukasi
            </NavLink>
            <NavLink
              to="/about-us"
              activeclassname="active"
              className="nav-link"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              activeclassname="active"
              className="nav-link"
            >
              Contact
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="button-primary">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#profile">
              <CgProfile size={40} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;