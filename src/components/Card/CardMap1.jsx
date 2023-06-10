import React from "react";
import Card from "react-bootstrap/Card";
import "../../style/home-card.css";


const CardMap1 = ({ cards }) => {
  return (
    <div className="container">
      <div className="row g-3 justify-content-between">
        {cards.map((product) => (
          <div className="col" key={product.uuid}>
            <Card>
              <Card.Img variant="top" src={product.img_makanan} />
              <Card.Body>
                <Card.Title>{product.judul_makanan}</Card.Title>
                <Card.Text>{product.deskripsi_lengkap}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMap1;
