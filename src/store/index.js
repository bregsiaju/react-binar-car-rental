import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './button';
import carsReducer from './cars';

const store = configureStore({
  reducer: {
    button: buttonReducer,
    cars: carsReducer
  },
});

export default store;