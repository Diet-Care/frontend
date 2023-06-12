import { useEffect, useState } from "react";
import "../../../style/home-card.css";
import CardMap from "../../Card/CardMap";

const RekomendasiMakananCard = () => {
  const url = "https://backend-production-2c47.up.railway.app/olahraga";
  const [cards, setDiet] = useState([]);
  const getDataDiet = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const slicedData = data.data.slice(0, 3);
        setDiet(slicedData);
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
  return <CardMap cards={cards} />;
};

export default RekomendasiMakananCard;
