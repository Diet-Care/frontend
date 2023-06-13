import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setEmail, setMessage, setName } from "../redux/actions/actions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Container } from "react-bootstrap";

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
      <h1>Contact</h1>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">
              Kirim
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