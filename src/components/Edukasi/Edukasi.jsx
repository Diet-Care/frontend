import React from "react";
import EdukasiMakanan from "./Makanan/EdukasiMakanan";
import HeroEdukasi from "./Hero/Hero";

const Edukasi = () => {
  return (
    <>
        <HeroEdukasi/>
    <div className="container">
      <div class="row gap-0 g-4 content mt-lg-0 mt-2">
        <EdukasiMakanan />
      </div>
    </div>
    </>
  );
};

export default Edukasi;
