import { useEffect, useState } from "react";
import "../../../style/home-card.css";
import CardMap from "../../Card/CardMap";
import Normal from "./NormalKalori/Normal";
import Rendah from "./RendahKalori/Rendah";
import Tinggi from "./TinggiKalori/Tinggi";

const urlMakanan = "https://backend-production-2c47.up.railway.app/makanan";
const urlOlahraga = "https://backend-production-2c47.up.railway.app/olahraga";

const useFetchData = (level) => {
  const [makanan, setDietMakanan] = useState([]);
  const [olahraga, setDietOlahraga] = useState([]);

  useEffect(() => {
    const getDataDiet = async () => {
      try {
        const responseMakanan = await fetch(urlMakanan);
        if (responseMakanan.ok) {
          const dataMakanan = await responseMakanan.json();
          const dataDietMakanan = dataMakanan.data.filter(
            (item) => item.level === level
          );
          setDietMakanan(dataDietMakanan);
        } else {
          console.error(
            "Error fetching makanan data:",
            responseMakanan.statusText
          );
        }

        const responseOlahraga = await fetch(urlOlahraga);
        if (responseOlahraga.ok) {
          const dataOlahraga = await responseOlahraga.json();
          const dataDietOlahraga = dataOlahraga.data.filter(
            (item) => item.level === level
          );
          setDietOlahraga(dataDietOlahraga);
        } else {
          console.error(
            "Error fetching olahraga data:",
            responseOlahraga.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getDataDiet();
  }, [level]);

  return { makanan, olahraga };
};

const RendahKalori = () => {
  const makanan = useFetchData("rendah").makanan;
  const olahraga = useFetchData("rendah").olahraga;
  return (
    <div className="container">
      <Rendah />
      <CardMap cards={makanan} key="makanan" />
      <CardMap cards={olahraga} key="olahraga" />
    </div>
  );
};

const NormalKalori = () => {
  const makanan = useFetchData("normal").makanan;
  const olahraga = useFetchData("normal").olahraga;
  return (
    <div className="container">
      <Normal />
      <CardMap cards={makanan} key="makanan" />
      <CardMap cards={olahraga} key="olahraga" />
    </div>
  );
};

const TinggiKalori = () => {
  const makanan = useFetchData("tinggi").makanan;
  const olahraga = useFetchData("tinggi").olahraga;
  return (
    <div className="container">
      <Tinggi />
      <CardMap cards={makanan} key="makanan" />
      <CardMap cards={olahraga} key="olahraga" />
    </div>
  );
};

export { NormalKalori, RendahKalori, TinggiKalori };
