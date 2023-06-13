import React from "react";
import Hero from "./Hero/Hero";
import RekomendasiDiet from "./RekomendasiDIet/RekomendasiDiet";
import GiziSeimbang from "./GiziSeimbang/GiziSeimbang";
import ServiceContent from "./Services/ServiceContent";
import RekomendasiMakanan from "./RekomendasiMakanan/RekomendasiMakanan";
import RekomendasiOlahraga from "./RekomendasiOlahraga/RekomendasiOlahraga";
import HomeAboutUs from "./AboutUs/HomeAboutUs";
import Navigation from "../Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <ServiceContent />
      <div className="diet">
        <RekomendasiDiet />
      </div>
      <div className="tentang-kami">
        <HomeAboutUs />
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
