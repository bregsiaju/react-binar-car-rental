import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getCarsList } from '../../store/carsReducers';
import MyButton from '../UI/MyButton';

import { Container, Row, Col, Form } from 'react-bootstrap';
// import CarResult from './CarResult';

// const mapStateToProps = (state) => {
//   getUsersList: state.getUsersList,
// };

const SearchBar = () => {
  const dispatch = useDispatch();
  const carsList = useSelector(state => state.getCarsList);
  console.log(carsList);
  const fetchCars = () => {
    dispatch(carsList.getCarsList());
  };

  // const [cars, setCars] = useState([]);
  // const [passenger, setPassenger] = useState("");
  // const [availableDate, setavailableDate] = useState("");

  // const fetchCar = () => {
  //   fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
  //     .then(response => response.json())
  //     .then(json => {
  //       setCars(
  //         json.filter((car) => {
  //           if (passenger === "") {
  //             return (
  //               car.available === true &&
  //               new Date(Date.parse(car.availableAt.split("T")[0])) < new Date(availableDate)
  //             );
  //           } else {
  //             return (
  //               car.available === true &&
  //               new Date(Date.parse(car.availableAt.split("T")[0])) < new Date(availableDate) &&
  //               car.capacity >= passenger
  //             );
  //           }
  //         })
  //       );
  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setPassenger(event.target.inputPassenger.value);
    // setavailableDate(event.target.inputDate.value);
    fetchCars();
  };

  return (
    <div className="searchPage">
      <section id="search">
        <Container className="border rounded pe-0">
          <Form onSubmit={handleSubmit}>
            <Row className="m-3">
              <Col md={11} className="p-0">
                <Row className="row-cols-sm-2 row-cols-lg-4 row-cols-1">
                  <Col className="pe-3 ps-0">
                    <Form.Label htmlFor="selectDriverType">Tipe Driver</Form.Label>
                    <Form.Select name="selectDriverType">
                      <option>Pilih Tipe Driver</option>
                      <option value="withDriver">Dengan Sopir</option>
                      <option value="withoutDriver">Tanpa Sopir (Lepas Kunci)</option>
                    </Form.Select>
                  </Col>
                  <Col className="pe-3 ps-0">
                    <Form.Label htmlFor="inputDate">Tanggal</Form.Label>
                    <Form.Control type="date" name="inputDate" />
                  </Col>
                  <Col className="pe-3 ps-0">
                    <Form.Label htmlFor="inputTime">Waktu Jemput/Ambil</Form.Label>
                    <Form.Control type="time" name="inputTime" />
                  </Col>
                  <Col className="pe-3 ps-0">
                    <Form.Label htmlFor="inputPassenger">Jumlah Penumpang (optional)</Form.Label>
                    <Form.Control type="text" name="inputPassenger" placeholder="Jumlah Penumpang" />
                  </Col>
                </Row>
              </Col>
              <Col sm={1} className="p-0 d-flex align-items-end">
                <MyButton type="submit" className="button-global">Cari Mobil</MyButton>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
      {/* <CarResult data={carsList} /> */}
    </div>
  );
};

export default SearchBar;