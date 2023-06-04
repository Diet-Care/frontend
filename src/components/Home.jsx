import React from "react";
import Hero from "./hero";
import ServiceContent from "./ServiceContent";
import RekomendasiDiet from "./RekomendasiDiet";
import RekomendasiMakanan from "./RekomendasiMakanan";
import RekomendasiOlahraga from "./RekomendasiOlahraga";
import AboutUs from "./AboutUs";
import GiziSeimbang from "./GiziSeimbang";

const Home = () => {
  return (
    <>
      <Hero />
        <ServiceContent />
      <div className="diet">
        <RekomendasiDiet />
      </div>
      <div className="tentang-kami">
        <AboutUs />
      </div>
      <div className="gizi">
        <GiziSeimbang />
      </div>
      <div className="makanan">
        <RekomendasiMakanan />
      </div>
      <div className="olahraga">
        <RekomendasiOlahraga />
      </div>
    </>
  );
};

export default Home;
