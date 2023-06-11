import '../style/hero.css'
const Hero = () => {
  return (
    <div className="container">
      <div className="hero-wrapper row gap-0 align-items-center">
        <div className="col">
          <img
            src="https://i.ibb.co/BZnfssX/Hero.jpg" 
            alt="Hero" 
            border="0"
            width="50%"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;