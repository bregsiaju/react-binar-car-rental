import React from 'react';
import MyButton from '../UI/MyButton';

import { Container, Row, Col, Form } from 'react-bootstrap';

const SearchBar = () => {
  const kokoko = () => {
    console.log('ahooooooooooo');
  };

  return (
    <section id="search">
      <Container className="border rounded pe-0">
        <Row className="m-3" onClick="activeDarkBackground()">
          <Col md={11} className="p-0">
            <Row>
              <Col className="pe-3 ps-0">
                <Form.Label>Tipe Driver</Form.Label>
                <Form.Select id="selectDriverType">
                  <option>Pilih Tipe Driver</option>
                  <option value="Dengan Sopir">Dengan Sopir</option>
                  <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                </Form.Select>
              </Col>
              <Col className="pe-3 ps-0">
                <Form.Label >Tanggal</Form.Label>
                <Form.Control type="date" id="inputTanggal" />
              </Col>
              <Col className="pe-3 ps-0">
                <Form.Label>Waktu Jemput/Ambil</Form.Label>
                <Form.Control type="time" id="inputWaktu" />
              </Col>
              <Col className="pe-3 ps-0">
                <Form.Label>Jumlah Penumpang (optional)</Form.Label>
                <Form.Control type="text" id="inputPenumpang" placeholder="Jumlah Penumpang" />
              </Col>
            </Row>
          </Col>
          <Col sm={1} className="p-0 d-flex align-items-end">
            <MyButton onClick={kokoko()} id="search-btn" className="button-global">Cari Mobil</MyButton>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchBar;