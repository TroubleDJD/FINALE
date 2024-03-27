import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <h1 className="mt-3">Home</h1>
      <div className="mt-3">
        <Link to="/" className="btn btn-primary mr-3">Home</Link>
        <Link to="/about" className="btn btn-primary mr-3">About</Link>
        <Link to="/contact" className="btn btn-primary mr-3">Information</Link>
      </div>
      <Row className="mt-3">
        <Col>
          <img src="https://proksol.com/wp-content/uploads/2020/01/cdr-slide01.jpg" alt="A view of the building" style={{ height: '423px' }} className="img-fluid" />
        </Col>
        <Col>
          <img src="/inside.jpeg" alt="Enter the residence" className="img-fluid" />
        </Col>
      </Row>
      <h2 className="mt-3">Edificio Casa Del Rio</h2>
      <Row className="mt-3">
        <Col>
          <p>
            Casa del Río is located in the heart of Santa Marta. A short walk separates you from the beautiful marina, beach, bars, and restaurants. This apartment is fully furnished, complete with dishes, silverware, laundry, air conditioning, and more! You will be charmed in our apartment and you will love spending your days in the sun in the beautiful pools of the building. Enjoy your evenings wrapped in the most beautiful sunsets, and dining and dancing your night away in Parque de los Novios.
          </p>
        </Col>
        <div>
        <Col>
          <img src="/kitch.jpeg" alt="Enter the residence" className="img-fluid" />
        </Col>
        </div>
      </Row>
    </Container>
  );
}

export default Home;
