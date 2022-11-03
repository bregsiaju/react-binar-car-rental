import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './button';

const store = configureStore({
  reducer: {
    button: buttonReducer,
  }
});

export default store;