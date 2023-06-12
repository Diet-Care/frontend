import { useEffect, useState } from "react";
import "../../../style/home-card.css";
import CardMap from "../../Card/CardMap";

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
    <div className="mt-5">
      <h1>Edukasi Olahraga</h1>
      <div class="row gap-0 g-4 content mt-lg-0 mt-2">
        <CardMap cards={cards} />;
      </div>
    </div>
  );
};

export default EdukasiOlahraga;
