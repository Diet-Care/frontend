import React from "react";
import "../../style/about.css";
import Button from "../Button";

const AboutUs = () => {
  return (
    <div class="container">
      <div class="row gap-3 align-items-center">
        <div class="col-lg-4 img">
          <img
            src="https://i.ibb.co/c6hsZV7/Pensive-housewife-holds-green-bok.webp"
            alt="Pensive-housewife-holds-green-bok"
            id="img-show"
            width="100%"
          />
          <div class="border-img"></div>
        </div>
        <div class="col-lg-7 content">
          <div class="judul">
            <h1 id="judul" class="mb-0 mb-lg-3">
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
            <Button>
              Lihat Lebih Lanjut
              <i class="fa-solid fa-arrow-right text-white ms-2"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
