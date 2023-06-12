import Button from "../Button";
import "../../style/home.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="hero-wrapper row gap-0 align-items-center flex-lg-row flex-column-reverse ">
        <div className="col-lg-6 col-md-12 left">
          <h1
            className="fw-bold mt-lg-0 mt-3 animate__animated animate__fadeInUp"
            id="title"
          >
            Ayo Ubah Gaya Hidupmu
          </h1>
          <p
            id="description"
            className="mb-lg-5 mb-4 mt-lg-3 mt-0 animate__animated animate__fadeInUp animate__delay-1s"
          >
            Investasi terbaik adalah kesehatan diri kita. Mulailah menerapkan
            gaya hidup sehat dengan diet yang sesuai bagi tubuh kita.
          </p>
          <Button variant="primary" onClick={() => navigate("/about")}>
            Cek Kebutuhan Gizi Anda
          </Button>
        </div>
        <div className="col-lg-6 col-md-12  right animate__animated animate__fadeIn animate__delay-1s">
          <img
            src="https://i.ibb.co/KwtNJdp/Hero.png"
            alt="Hero"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;