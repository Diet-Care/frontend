import { useEffect, useState } from "react";
import "../../../style/home-card.css";
import CardMap from "../../Card/CardMap";
import Navigation from "../../Navigation";
import "../style/home.css"

const OlahragaAll = () => {
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
    <>
      <Navigation />
      <div className="container home-wrapper">
        <div class="home-layout gap-4 g-4 content mt-lg-0 mt-2">
          <CardMap cards={cards} />;
        </div>
      </div>
    </>
  );
};

export default OlahragaAll;
