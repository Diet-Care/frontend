import { useEffect, useState } from "react";
import "../../style/home-card.css";
import CardMap from "../Card/CardMap";

const MakananAll = () => {
  const url = "https://647bcb83c0bae2880ad0413b.mockapi.io/pilihan-diet";
  const [card, setDiet] = useState([]);
  const getDataDiet = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const dataDiet = data;
    setDiet(dataDiet);
  };

  useEffect(() => {
    getDataDiet();
  }, []);
  return (
    <div className="container">
      <div class="row gap-0 g-4 content mt-lg-0 mt-2">
        <CardMap card={card} />;
      </div>
    </div>
  );
};

export default MakananAll;
