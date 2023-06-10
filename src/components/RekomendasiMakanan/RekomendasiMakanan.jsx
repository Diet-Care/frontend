import React from "react";
import "../../style/rekomendasi-makanan.css";
import RekomendasiMakananCard from "./RekomendasiMakananCard";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const RekomendasiMakanan = () => {
  const navigate = useNavigate();
  const handleLihatMakananLainnya = () => {
    navigate("/makanan-all");
  };
  return (
    <div className="container">
      <div class="makanan">
        <div class="row header-makanan">
          <div class="col">
            <h1>Rekomendasi Makanan</h1>
          </div>
          <div class="col  d-none d-lg-flex justify-content-end ">
              <Button variant="btnLainnya" onClick={handleLihatMakananLainnya}>
                <div className="lihat-detail">
                  Lainnya<i class="fa-solid fa-chevron-right"></i>
                </div>
              </Button>
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
