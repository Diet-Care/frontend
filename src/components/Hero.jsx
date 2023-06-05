import '../style/hero.css'
const Hero = () => {
  return (
    <div className="container">
      <div className="hero-wrapper row gap-0 align-items-center flex-lg-row flex-column-reverse ">
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