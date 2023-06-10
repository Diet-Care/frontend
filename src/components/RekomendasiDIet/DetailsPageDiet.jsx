import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../style/home-card.css";

const DetailsPageDiet = () => {
  const { id } = useParams(); // Mengakses ID dari URL

  const url = "https://647bcb83c0bae2880ad0413b.mockapi.io/pilihan-diet";
  const [diet, setDiet] = useState([]);

  const getDataDiet = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDiet(data);
  };

  useEffect(() => {
    getDataDiet();
  }, []);

  return (
    <div>
      <h2>Halaman Details Diet dengan ID: {id}</h2>
      {diet
        .filter((diet) => diet.id === id)
        .map((diet) => (
          <div className="col-12" key={diet.id}>
            <CardDiet
              title={diet.title}
              description={diet.deskripsi}
              image={diet.image}
              id={diet.id}
            />
          </div>
        ))}
    </div>
  );
};

function CardDiet(props) {
  return (
    <Card className="card">
      <Card.Img className="card-image" src={props.image} />
      <Card.Body className="text">
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-deskripsi">{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DetailsPageDiet;
