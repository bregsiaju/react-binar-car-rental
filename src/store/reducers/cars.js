import carsData from './carsData';

const initialState = {
  cars: carsData,
  error: false,
};

const cars = (state = initialState, action) => {
  return state;
};

export default cars;