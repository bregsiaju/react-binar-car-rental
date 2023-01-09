import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import MyButton from './MyButton';
import ErrorModal from './ErrorModal';
import car from '../../assets/general/img_car.png';

const Hero = () => {
  const location = useLocation();
  const tokenz = window.localStorage.getItem("accessToken");
  const [errorModal, setErrorModal] = useState(false);

  return (
    <>
      <div id="main" className="d-flex justify-content-center">
        <div className="position-relative">
          <Container>
            <Row>
              <Col lg={6} className="welcome d-flex align-items-center">
                <div className="welcome-text">
                  <p className="slogan fw-bold">Sewa & Rental Mobil Terbaik di kawasan Surabaya</p>
                  <p className="fw-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga
                    terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  {location.pathname === "/" && (
                    <div>
                      {tokenz ?
                        <Link to={"/cars"}><MyButton>Mulai Sewa Mobil</MyButton></Link>
                        : <MyButton onClick={() => setErrorModal(true)}>Mulai Sewa Mobil</MyButton>
                      }
                    </div>
                  )}
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
      </div >
      <ErrorModal
        show={errorModal}
        title='Unauthorized'
        message='Please login first.'
        onHide={() => setErrorModal(false)}
      />
    </>
  );
};

export default Hero;