import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {CgProfile} from "react-icons/cg"

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#"><a><img src="https://i.ibb.co/mCXdQKm/logo-no-background.png" alt="logo-no-background" border="0" width={60} height={30}/></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Diet</Nav.Link>
            <Nav.Link href="#" active>Edukasi</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="contactForm">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#profile"><CgProfile/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;