import React from "react";
import Hero from "./Hero/Hero";
import GiziSeimbang from "./GiziSeimbang/GiziSeimbang";
import ServiceContent from "./Services/ServiceContent";
import RekomendasiMakanan from "./RekomendasiMakanan/RekomendasiMakanan";
import RekomendasiOlahraga from "./RekomendasiOlahraga/RekomendasiOlahraga";
import HomeAboutUs from "./AboutUs/HomeAboutUs";
import Navigation from "../Navigation";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceContent />
      <div className="makanan-home" id="makanan">
        <RekomendasiMakanan />
      </div>
      <div className="tentang-kami">
        <HomeAboutUs />
      </div>
      <div className="gizi">
        <GiziSeimbang />
      </div>
      <div className="olahraga" id="olahraga">
        <RekomendasiOlahraga />
      </div>
    </>
  );
};

export default Home;
