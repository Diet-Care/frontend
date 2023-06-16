import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "../Button";
import "../../style/home-card.css";

const CardMap = ({ cards }) => {
  return (
    <>
      {cards.map((item) => (
        <div className="col-12 col-lg card-wrapper" key={item.uuid}>
          <Card className="card">
            <div className="img-wrapper">
              <Card.Img className="card-image" src={item.img} />
            </div>
            <Card.Body className="text">
              <Card.Title className="card-title">{item.judul}</Card.Title>
              <Card.Text className="card-deskripsi">
                {item.deskripsi_lengkap}
              </Card.Text>
              <div className="link">
                <Link to={`/details/${item.uuid}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardMap;
