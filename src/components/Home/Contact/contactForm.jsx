import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail, setMessage, setName } from "../../../redux/actions/actions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Container } from "react-bootstrap";
import Button from "../../Button";
import "./style/contactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang dikirim: ", formData);
    dispatch(setName(""));
    dispatch(setEmail(""));
    dispatch(setMessage(""));
  };

  return (
    <Container className="contact">
      <Row className="d-flex justify-content-between w-100 gap-5 flex-lg-row flex-column-reverse pt-5 pt-lg-0">
        <Col>
          <h1 className="contact-title">Contact</h1>
          <Form onSubmit={handleSubmit} className=" d-flex flex-column gap-3">
            <Form.Group controlId="name">
              <Form.Label>Nama: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Masukkan Nama Anda"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Masukkan Alamat Email Anda"
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Pesan: </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Tulis Pesan Anda"
              />
            </Form.Group>

            <div className="mt-3">
              <Button variant="primary" type="submit">
                Kirim
              </Button>
            </div>
          </Form>
        </Col>
        <Col >
          <img src="https://i.ibb.co/KwtNJdp/Hero.png" alt="" width="100%" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
