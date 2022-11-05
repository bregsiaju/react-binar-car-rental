import { GET_CARS_LIST } from './cars';

// Initial state
const initialState = {
  getCarsList: false,
  errorCarsList: false,
};

export const carsList = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_LIST:
      return {
        ...state,
        getCarsList: action.payload.data
      };
    default:
      return state;
  }
};
