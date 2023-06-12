import React from "react";
import "../../../style/rekomendasi-diet.css";
import RekomendasiDietCard from "./RekomendasiDietCard";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

const RekomendasiDiet = () => {
  const navigate = useNavigate();
  const handleLihatDietLainnya = () => {
    navigate("/alldiet");
  };
  return (
    <div className="container">
      <div class="diet-wrapper" id="diet">
        <div class="row diet-header mb-lg-5">
          <div class="text-lg-center text-start">
            <h1>Pilihan Diet Yang Cocok Dengan Anda</h1>
            <p>
              Berbagai jenis diet yang dapat disesuaikan dengan kebutuhanmu
              untuk mencapai berat badan yang sehat dan memperbaiki pola
              makanmu. Mari temukan jenis diet yang cocok denganmu dan perbaiki
              kesehatanmu hari ini!
            </p>
          </div>
        </div>
        <div class="row gap-4 g-4 content mt-lg-0 mt-2">
          <RekomendasiDietCard />
          <div class="btn-diet mt-5">
            <Button
              variant="primary"
              children="Lihat Diet Lainnya"
              onClick={handleLihatDietLainnya}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekomendasiDiet;
