import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { setEmail, setMessage, setName } from "../redux/actions/action";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import "../style/contactForm.css"

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang dikirim: ', formData);
    dispatch(setName(''));
    dispatch(setEmail(''));
    dispatch(setMessage(''));
  };
  
  return(
    <Container>
      <Row>
        <Col className="inputForm">
          <h1 className="title">Kontak Kami</h1>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Masukkan Nama Anda"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Masukkan Alamat Email Anda"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Tulis Pesan Anda"
              />
            </InputGroup>

            <Button type="submit" className="btn-submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
        <img src="https://i.ibb.co/KwtNJdp/Hero.png" alt="" width={600}/>
        </Col>
      </Row>

    </Container>
  );
};

export default ContactForm;