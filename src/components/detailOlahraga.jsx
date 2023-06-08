import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../style/detailolahraga.css"

const DetailOlahraga = () => {

  
  return(
    <Container className="mt-4">
      <Row>
        <Col>
        <h4>test</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla rerum veniam facilis culpa officia voluptatem nam voluptates a, incidunt doloribus dignissimos delectus nostrum nisi facere exercitationem? Perferendis, odio blanditiis!</p>
        </Col>
        <Col><img src="https://i.ibb.co/BZnfssX/Hero.jpg" alt="asdasd"  /></Col>
      </Row>
    </Container>
  );
  }

  export default DetailOlahraga;