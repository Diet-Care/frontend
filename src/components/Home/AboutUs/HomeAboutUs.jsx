import React from "react";
import "../style/about-us.css";
import Button from "../../Button";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row gap-5 align-items-center">
        <div className="col-lg-4 img p-2 p-lg-0">
          <img
            src="https://i.ibb.co/c6hsZV7/Pensive-housewife-holds-green-bok.webp"
            alt="Pensive-housewife-holds-green-bok"
            id="img-show"
            width="100%"
          />
        </div>
        <div className="col-lg-7 content">
          <div className="judul">
            <h1 id="judul" className="mb-0 mb-lg-3">
              Tentang Diet Care
            </h1>
            <h1>
              Setiap Kita Makan Dan Minum, Kita Dapat Menentukan Dunia Seperti
              Apa Yang Kita Inginkan
            </h1>
            <p>
              Kami mengajak seluruh masyarakat Indonesia untuk bekerja sama dan
              berpartisipasi dalam gerakan ini bersama-sama. Sebuah gerakan yang
              bertujuan untuk mendorong penerapan kebiasaan makan dan minum yang
              lebih sehat dan berkelanjutan.
            </p>
            <NavLink to="/about-us" className="home-about">
              <Button variant="primary">
                Lihat Lebih Lanjut
                <i className="fa-solid fa-arrow-right text-white ms-2"></i>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
