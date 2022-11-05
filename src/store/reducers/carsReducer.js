import { GET_CARS_LIST } from '../actions/carsAction';
// import carsData from './carsData';

const initialState = {
  getCarsList: false,
  errorCarsList: false,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_LIST:
      return {
        ...state,
        getCarsList: action.payload.data,
        errorCarsList: action.payload.errorMessage,
      };
    default:
      return state;
  };
};

export default carsReducer;