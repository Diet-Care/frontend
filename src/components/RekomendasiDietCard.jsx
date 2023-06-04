import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "../style/home-card.css";
import Button from "./Button";

const RekomendasiDietCard = () => {
  const url = "https://647bcb83c0bae2880ad0413b.mockapi.io/pilihan-diet";
  const [diet, setDiet] = useState([]);
  const getDataDiet = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const dataDiet = data.slice(0,3);
    setDiet(dataDiet);
  };

  useEffect(() => {
    getDataDiet();
  });
  return (
    <>
      {diet.map((diet) => (
        <div className="col">
          <CardDiet
            key={diet.id}
            title={diet.title}
            description={diet.deskripsi}
            image={diet.image}
          />
        </div>
      ))}
    </>
  );
};
function CardDiet(props) {
  return (
    <Card className="card">
      <Card.Img className="card-image" src={props.image} />
      <Card.Body className="text">
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-deskripsi">{props.description}</Card.Text>
        <div className="link">
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RekomendasiDietCard;
