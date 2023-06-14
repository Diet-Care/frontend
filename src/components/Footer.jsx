import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "../style/footer.css";
import "./Button";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className="row">
          <div className="footer-column-1 col">
            {/* Kolom pertama */}
            <div className="footer-content">
              <div className="footer-title-1">
                <img
                  src="https://i.ibb.co/FhZm0bQ/head-danone-logo.png"
                  alt="head-danone-logo"
                  width={100}
                />
              </div>
              <div className="footer-info-1">
                <p>
                  Setiap kita makan dan minum, kita dapat menentukan dunia
                  seperti yang kita inginkan.
                </p>
                <p>
                  <AiOutlineMail /> info@dietcare.com
                </p>
                <p>
                  <AiOutlinePhone /> (+62) 89 3456 7890
                </p>
              </div>
            </div>
          </div>
          <div className="footer-column col">
            {/* Kolom kedua */}
            <div className="footer-content">
              <div className="footer-title">
                <h5 className="title">Layanan Kami</h5>
              </div>
              <div className="footer-info">
                <ul className="footer-list">
                  <li>
                    <Link to="/diet-sehat" className="footer-link">
                      Diet Sehat
                    </Link>
                  </li>
                  <li>
                    <Link to="/edukasi" className="footer-link">
                      Edukasi
                    </Link>
                  </li>
                  <li>
                    <Link to="/rekomendasi-makanan" className="footer-link">
                      Rekomendasi Makanan
                    </Link>
                  </li>
                  <li>
                    <Link to="/rekomendasi-olahraga" className="footer-link">
                      Rekomendasi Olahraga
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-column col">
            {/* Kolom ketiga */}
            <div className="footer-content">
              <div className="footer-title">
                <h5 className="title">Support</h5>
              </div>
              <div className="footer-info">
                <ul className="footer-list">
                  <li>
                    <Link to="/tentang-dietcare" className="footer-link">
                      Tentang DietCare
                    </Link>
                  </li>
                  <li>
                    <Link to="/kebijakan-privasi" className="footer-link">
                      Kebijakan & Privasi
                    </Link>
                  </li>
                  <li>
                    <Link to="/hubungi-kami" className="footer-link">
                      Hubungi Kami
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-column col">
            {/* Kolom keempat */}
            <div className="footer-content">
              <div className="footer-title">
                <h5 className="title">Langganan</h5>
              </div>
              <div className="footer-info">
                <p>Informasi singkat tentang langganan.</p>
                <Form className="d-flex">
                  <Form.Group controlId="formEmail" className="me-2">
                    <Form.Control
                      type="email"
                      placeholder="Masukkan email Anda"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Langganan
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p>&copy; {year} DietCare</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
