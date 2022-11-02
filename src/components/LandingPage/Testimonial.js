import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="containers">
        <div className="heading d-flex align-items-center flex-column">
          <p className="title-section fw-bold">Testimonial</p>
          <p className="m-0 px-3">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <OwlCarousel className='owl-theme' loop nav>
          <div className="item d-flex">
            <img src="images/man.png" alt="testi 1" />
            <div className="testi">
              <div className="rate d-flex">
                <img src="images/Rate.svg" id="rate" alt="rate" />
              </div>
              <p className="my-2">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod”
              </p>
              <p className="fw-bold mb-0">John Dee 32, Bromo</p>
            </div>
          </div>
          <div className="item d-flex">
            <img src="images/woman.png" alt="testi 2" />
            <div className="testi">
              <div className="rate d-flex">
                <img src="images/Rate.svg" id="rate" alt="rate" />
              </div>
              <p className="my-2">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod”
              </p>
              <p className="fw-bold mb-0">Christie 32, Bromo</p>
            </div>
          </div>
          <div className="item d-flex">
            <img src="images/man.png" alt="testi 3" />
            <div className="testi">
              <div className="rate d-flex">
                <img src="images/Rate.svg" id="rate" alt="rate" />
              </div>
              <p className="my-2">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod”
              </p>
              <p className="fw-bold mb-0">Bahng 32, Bromo</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;