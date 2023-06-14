import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import "../style/footer.css"
import "./Button"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // <footer>
    //   <Container>
    //     <div className='footer-container'>
    //       <Col md={4}>
    //         {/* Kolom pertama */}
    //         <div className='col'>
    //           <img src="https://i.ibb.co/FhZm0bQ/head-danone-logo.png" alt="head-danone-logo" width={100} />
    //           <p>Setiap kita makan dan minum, kita dapat menentukan dunia seperti yang kita inginkan.</p>
    //           <p><AiOutlineMail /> info@dietcare.com</p>
    //           <p><AiOutlinePhone/> (+62) 89 3456 7890</p>
    //         </div>
    //       </Col>
    //       <Col md={3}>
    //         {/* Kolom kedua */}
    //         <div className='col'>
    //           <h5 className='title'>Layanan Kami</h5>
    //           <ul className='footer-list'>
    //             <li>
    //               <Link to="/diet-sehat"  className='footer-link'>Diet Sehat</Link>
    //             </li>
    //             <li>
    //               <Link to="/edukasi" className='footer-link'>Edukasi</Link>
    //             </li>
    //             <li>
    //               <Link to="/rekomendasi-makanan" className='footer-link'>Rekomendasi Makanan</Link>
    //             </li>
    //             <li>
    //               <Link to="/rekomendasi-olahraga" className='footer-link'>Rekomendasi Olahraga</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </Col>
    //       <Col md={2}>
    //         {/* Kolom ketiga */}
    //         <div className='col'>
    //           <h5 className='title'>Support</h5>
    //           <ul className='footer-list'>
    //             <li>
    //               <Link to="/tentang-dietcare" className='footer-link'>Tentang DietCare</Link>
    //             </li>
    //             <li>
    //               <Link to="/kebijakan-privasi" className='footer-link'>Kebijakan & Privasi</Link>
    //             </li>
    //             <li>
    //               <Link to="/hubungi-kami" className='footer-link'>Hubungi Kami</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </Col>
    //       <Col md={3}>
    //         {/* Kolom keempat */}
    //         <div className='col'>
    //           <h5 className='title'>Langganan</h5>
    //           <p>Berlangganan untuk mendapatkan info dari kami lebih cepat  </p>
    //           <Form className='d-flex'>
    //             <Form.Group controlId="formEmail" className='me-2'>
    //               <Form.Control type="email" placeholder="Masukkan email Anda" />
    //             </Form.Group>
    //             <Button variant="primary" type="submit">
    //               Langganan
    //             </Button>
    //           </Form>
    //         </div>
    //       </Col>
    //     </div>
    //   </Container>
    //   <div className="footer-bottom">
    //     <Container>
    //       <p>&copy; {year} DietCare FE-37 & BE-19 </p>
    //     </Container>
    //   </div>
    // </footer>

<footer>
  <Container>
    <div className="footer-container">
      <div className="footer-column-1 col-4">
        {/* Kolom pertama */}
        <div className="footer-content">
          <div className="footer-title-1">
            <img src="https://i.ibb.co/FhZm0bQ/head-danone-logo.png" alt="head-danone-logo" width={100} />
          </div>
          <div className="footer-info-1">
          <p>Setiap kita makan dan minum, kita dapat menentukan dunia seperti yang kita inginkan.</p>
          <p><AiOutlineMail /> info@dietcare.com</p>
          <p><AiOutlinePhone/> (+62) 89 3456 7890</p>
          </div>
        </div>
      </div>
      <div className="footer-column col-3">
        {/* Kolom kedua */}
        <div className="footer-content">
          <div className="footer-title">
            <h5 className='title'>Layanan Kami</h5>
          </div>
          <div className="footer-info">
            <ul className="footer-list">
              <li>
                <Link to="/diet-sehat" className="footer-link">Diet Sehat</Link>
              </li>
              <li>
                <Link to="/edukasi" className="footer-link">Edukasi</Link>
              </li>
              <li>
                <Link to="/rekomendasi-makanan" className="footer-link">Rekomendasi Makanan</Link>
              </li>
              <li>
                <Link to="/rekomendasi-olahraga" className="footer-link">Rekomendasi Olahraga</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-column col-3">
        {/* Kolom ketiga */}
        <div className="footer-content">
          <div className="footer-title">
            <h5 className='title'>Support</h5>
          </div>
          <div className="footer-info">
            <ul className="footer-list">
              <li>
                <Link to="/tentang-dietcare" className="footer-link">Tentang DietCare</Link>
              </li>
              <li>
                <Link to="/kebijakan-privasi" className="footer-link">Kebijakan & Privasi</Link>
              </li>
              <li>
                <Link to="/hubungi-kami" className="footer-link">Hubungi Kami</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-column col-4">
        {/* Kolom keempat */}
        <div className="footer-content">
          <div className="footer-title">
            <h5 className='title'>Langganan</h5>
          </div>
          <div className="footer-info">
            <p>Informasi singkat tentang langganan.</p>
            <Form className='d-flex'>
              <Form.Group controlId="formEmail" className='me-2'>
                <Form.Control type="email" placeholder="Masukkan email Anda" />
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
