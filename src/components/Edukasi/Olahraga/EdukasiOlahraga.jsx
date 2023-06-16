import { useEffect, useState } from "react";
import "../../../style/home-card.css";
import CardMap from "../../Card/CardMap";
import "../style/edukasi.css";


const EdukasiOlahraga = () => {
  const url = "https://backend-production-2c47.up.railway.app/olahraga";
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
    <div className=" edukasi pt-4">
      <h1 className="text-center">Rekomendasi Olahraga</h1>
      <div className="edukasi-layout gap-4 g-4 content mt-lg-0 pt-5">
        <CardMap cards={cards} />
      </div>
    </div>
  );
};

export default EdukasiOlahraga;
