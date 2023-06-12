import React from "react";
import EdukasiMakanan from "./Makanan/EdukasiMakanan";
import HeroEdukasi from "./Hero/Hero";
import Navigation from "../Navigation";
import EdukasiOlahraga from "./Olahraga/EdukasiOlahraga";

const Edukasi = () => {
  return (
    <>
      <Navigation />
      <HeroEdukasi />
      <div className="container">
        <div class="row gap-0 g-4 content mt-lg-0 mt-2">
          <EdukasiMakanan />
        </div>

          <EdukasiOlahraga />
      </div>
    </>
  );
};

export default Edukasi;
