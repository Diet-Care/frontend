import React from "react";
import "../../style/heroedukasi.css";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container 
    style={{
      backgroundImage: 'url("https://i.ibb.co/BZnfssX/Hero.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}
    >
      
    </Container>
  );
};

export default Hero;
