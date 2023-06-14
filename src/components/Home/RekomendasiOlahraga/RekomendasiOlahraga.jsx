import React from "react";
import '../../../style/rekomendasi-olahraga.css'
import RekomendasiOlahragaCard from "./RekomendasiOlahragaCard";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";

const RekomendasiOlahraga = () => {
  const navigate = useNavigate();
  const handleLihatOlahragaLainnya = () => {
    navigate("/olahraga-all");
  };
  return (
    <div className="container">
      <div class="makanan">
        <div class="row header-makanan">
          <div class="col">
            <h1>Rekomendasi Olahraga</h1>
          </div>
          <div class="col  d-none d-lg-flex justify-content-end ">
            <Button variant="btnLainnya" onClick={handleLihatOlahragaLainnya}>
              <div className="lihat-detail">
                Lainnya<i class="fa-solid fa-chevron-right"></i>
              </div>
            </Button>
          </div>
        </div>
        <div class="row gap-4 g-4 content mt-lg-0 mt-2">
          <RekomendasiOlahragaCard />
        </div>
      </div>
    </div>
  );
};

export default RekomendasiOlahraga;
