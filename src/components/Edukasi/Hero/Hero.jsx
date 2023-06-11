import React from "react";
import "../../../style/heroedukasi.css";


const HeroEdukasi = () => {
  return (
    <div
    style={{
      backgroundImage: 'url("https://i.ibb.co/LNZ8Fpx/Whats-App-Image-2023-06-10-at-18-27-39.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width:'100%'
    }}
    >
      <p id="title" className="mt-lg-0 mt-3">Apa itu Gizi Seimbang?</p>
      <p id="description" className="mb-lg-5 mb-4 mt-lg-3 mt-0 col-6">Gizi seimbang adalah susunan makanan sehari-hari yang mengandung zat gizi dalam jenis dan jumlah yang sesuai dengan kebutuhan tubuh yaitu jenis kelamin, umur dan status kesehatan. Pola makan tidak seimbang meningkatkan risiko kekurangan atau kelebihan gizi yang dapat berdampak negatif pada kesehatan</p>
    </div>
  );
};

export default HeroEdukasi;
