import { useEffect, useState } from "react";
import "../../../style/home-card.css";
import "../style/edukasi.css"
import CardMap from "../../Card/CardMap";

const EdukasiMakanan = () => {
  const url = "https://backend-production-2c47.up.railway.app/makanan";
  const [cards, setDiet] = useState([]);
  const getDataDiet = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setDiet(data.data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataDiet();
  }, []);
  return (
    <div className="pt-3 edukasi">
      <h1 className="text-center">Kadar Kandungan Gizi Makanan Sehat</h1>
      <div class="edukasi-layout gap-4 g-4 content mt-lg-0 pt-5">
        <CardMap cards={cards} />
      </div>
    </div>
  );
};

export default EdukasiMakanan;
