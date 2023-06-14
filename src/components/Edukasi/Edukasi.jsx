import React from "react";
import EdukasiMakanan from "./Makanan/EdukasiMakanan";
import HeroEdukasi from "./Hero/HeroEdukasi";
import EdukasiOlahraga from "./Olahraga/EdukasiOlahraga";
import Navigation from "../Navigation";

const Edukasi = () => {
  return (
    <>
      <HeroEdukasi />
      <div className="container">
        <div class="row gap-0 g-4 content mt-lg-0 mt-2 mb-5">
          <EdukasiMakanan />
        </div>
        <div className="mt-5">
          <EdukasiOlahraga />
        </div>
      </div>
    </>
  );
};

export default Edukasi;
