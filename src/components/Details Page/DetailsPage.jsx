import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../style/home-card.css";
import "../../style/herodetails.css";
import Navigation from "../Navigation";

const DetailsPageDiet = () => {
  const { id } = useParams(); // Mengakses ID dari URL
  const urlMakanan = "https://backend-production-2c47.up.railway.app/makanan";
  const urlOlahraga = "https://backend-production-2c47.up.railway.app/olahraga";
  const [cards, setCards] = useState([]);

  const getDataDiet = async () => {
    try {
      const responseMakanan = await fetch(urlMakanan);
      const responseOlahraga = await fetch(urlOlahraga);

      if (responseMakanan.ok && responseOlahraga.ok) {
        const dataMakanan = await responseMakanan.json();
        const dataOlahraga = await responseOlahraga.json();

        const idMakanan = dataMakanan.data.find((item) => item.uuid === id);
        const idOlahraga = dataOlahraga.data.find((item) => item.uuid === id);
        if (idMakanan !== undefined) {
          setCards([idMakanan]);
        } else if (idOlahraga !== undefined) {
          setCards([idOlahraga]);
        } else {
          console.error("Data not found for the given ID");
        }
      } else {
        console.error("Error fetching data");
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
      <div>
        {cards
          .filter((item) => item.uuid === id)
          .map((item) => (
            <div className="col-12" key={item.uuid}>
              <CardDiet
                title={item.judul}
                description={item.deskripsi_lengkap}
                image={item.img}
                id={item.uuid}
              />
            </div>
          ))}
      </div>
    </>
  );
};

function CardDiet(props) {
  return (
    <>
      <Card className="card-detail">
        <Card.Img className="card-image" src={props.image} />
        <Card.Body className="text">
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-deskripsi">{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default DetailsPageDiet;
