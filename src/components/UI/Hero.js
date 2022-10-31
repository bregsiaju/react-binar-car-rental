import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import MyButton from './MyButton';
import './Hero.css';

import car from '../../assets/general/img_car.png';

const Hero = () => {
  return (
    <div id="main" class="d-flex justify-content-center">
      <div class="position-relative">
        <Container>
          <Row>
            <Col lg={6} className="welcome d-flex align-items-center">
              <div class="welcome-text">
                <p class="slogan fw-bold">Sewa & Rental Mobil Terbaik di kawasan Surabaya</p>
                <p class="fw-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga
                  terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Nav.Link href=""><MyButton>Mulai Sewa Mobil</MyButton></Nav.Link>
              </div>
            </Col>
            <Col lg={6}>
              <div class="img-car mt-lg-0 mt-4">
                <img src={car} class="position-absolute" alt="car" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;