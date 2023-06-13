import React from "react";
import "../style/hero-edukasi.css";

const HeroEdukasi = () => {
  return (
    <div className="edukasi-wrapper hero-dark">
      <div className="container text-wrapper mt-5">
        <h1 className="title">
          Apa itu Gizi Seimbang ?
        </h1>
        <p className="description mt-3">
          Gizi seimbang adalah susunan makanan sehari-hari yang mengandung zat
          gizi dalam jenis dan jumlah yang sesuai dengan kebutuhan tubuh yaitu
          jenis kelamin, umur dan status kesehatan. Pola makan tidak seimbang
          meningkatkan risiko kekurangan atau kelebihan gizi yang dapat
          berdampak negatif pada kesehatan
        </p>
      </div>
    </div>
  );
};

export default HeroEdukasi;
