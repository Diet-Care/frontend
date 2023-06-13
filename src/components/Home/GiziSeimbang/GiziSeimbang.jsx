import React from "react";
import "../../../style/gizi-seimbang.css";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";


const GiziSeimbang = () => {

    const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/edukasi");
  }
  return (
    <div class="row align-items-center px-2">
      <div class="text  text-center text-white">
        <h1>Apa itu Gizi Seimbang?</h1>
        <p>
          Gizi seimbang adalah susunan makanan sehari-hari yang mengandung zat
          gizi dalam jenis dan jumlah yang sesuai dengan kebutuhan tubuh yaitu
          jenis kelamin, umur dan status kesehatan. Pola makan tidak seimbang
          meningkatkan risiko kekurangan atau kelebihan gizi yang dapat
          berdampak negatif pada kesehatan
        </p>
        <Button onClick={handleNavigate} variant="btnBorder">Lihat Lebih Banyak</Button>
      </div>
    </div>
  );
};

export default GiziSeimbang;
