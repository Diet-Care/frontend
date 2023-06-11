import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../style/home-card.css";
import "../../style/herodetails.css";
import Navigation from "../Navigation/Navigation";

const DetailsPageDiet = () => {
  const { id } = useParams(); // Mengakses ID dari URL
  const url = "https://backend-production-2c47.up.railway.app/makanan";
  const [diet, setDiet] = useState([]);
  const getDataDiet = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const dataDiet = data.data;
        setDiet(dataDiet);
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
    <div>
      {diet
        .filter((diet) => diet.uuid === id)
        .map((diet) => (
          <div className="col-12" key={diet.uuid}>
            <CardDiet
              title={diet.judul}
              description={diet.deskripsi_lengkap}
              image={diet.img}
              id={diet.uuid}
            />
          </div>
        ))}
    </div>
  );
};

function CardDiet(props) {
  return (
    // rubah style nya pada bagian ini

    <>
    {/* <h1 className="title mb-2">Detail Makanan</h1> */}
    {/* <div className="hero"><img src={props.image} alt="" /></div> */}
    {/* <h4 className="sub-title mt-4">{props.title}</h4> */}
    {/* <p className="description">{props.description}</p> */}
    
    <Navigation/>
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
