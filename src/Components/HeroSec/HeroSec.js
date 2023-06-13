
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import firstimg from '../../Assets/banner-1.1.png'
import secimg from '../../Assets/banner-2.2.png'

const HeroSec = () => {
  return (
    <Container className="my-5">
    <Row>
      <Col xs={12} md={6}>
        <img src={firstimg}/>
      </Col>
      <Col xs={12} md={6}>
      <img src={secimg}/>
      </Col>
    </Row>
    </Container>
  );
};

export default HeroSec;
