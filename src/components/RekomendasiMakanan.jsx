import React from "react";
import "../style/rekomendasi-makanan.css";
import RekomendasiMakananCard from "./RekomendasiMakananCard";

const RekomendasiMakanan = () => {
  return (
    <div className="container">
      <div class="makanan">
        <div class="row header-makanan">
          <div class="col">
            <h1>Rekomendasi Makanan</h1>
          </div>
          <div class="col d-lg-block d-none">
            <a href="">
              <div class="lihat-detail">
                <h3>Lainnya</h3>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </a>
          </div>
        </div>
        <div class="row gap-0 g-4 content mt-lg-0 mt-2">
          <RekomendasiMakananCard />
        </div>
      </div>
    </div>
  );
};

export default RekomendasiMakanan;
