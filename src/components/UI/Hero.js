import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import MyButton from './MyButton';
import './Hero.css';

import car from '../../assets/general/img_car.png';

const Hero = () => {
  return (
    <div id="main" className="d-flex justify-content-center">
      <div className="position-relative">
        <Container>
          <Row>
            <Col lg={6} className="welcome d-flex align-items-center">
              <div className="welcome-text">
                <p className="slogan fw-bold">Sewa & Rental Mobil Terbaik di kawasan Surabaya</p>
                <p className="fw-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga
                  terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Nav.Link href=""><MyButton>Mulai Sewa Mobil</MyButton></Nav.Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img-car mt-lg-0 mt-4">
                <img src={car} className="position-absolute" alt="car" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;