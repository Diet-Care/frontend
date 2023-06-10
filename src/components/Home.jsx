import React from "react";
import Hero from "./Hero/Hero";
import RekomendasiDiet from "./RekomendasiDIet/RekomendasiDiet";
import AboutUs from "./AboutUs/AboutUs";
import GiziSeimbang from "./GiziSeimbang/GiziSeimbang";
import ServiceContent from "./Services/ServiceContent";
import RekomendasiMakanan from "./RekomendasiMakanan/RekomendasiMakanan";
import RekomendasiOlahraga from "./RekomendasiOlahraga/RekomendasiOlahraga";

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
