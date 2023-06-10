import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "../Button";
import "../../style/home-card.css";

const CardMap = ({ cards }) => {
  return (
    <>
      {cards.map((item) => (
        <div className="col card-wrapper" key={item.uuid}>
          <Card className="card">
            <Card.Img className="card-image" src={item.img} />
            <Card.Body className="text">
              <Card.Title className="card-title">
                {item.judul}
              </Card.Title>
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
