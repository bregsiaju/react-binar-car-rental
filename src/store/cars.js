import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  getCarsList: []
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    async getCarsList(state) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
        const carList = response.data;

        const getList = carList.filter(car => {
          return car.hasOwnProperty('year');
        });

        console.log(getList);
        state.getCarsList = getList;
        // console.log(carList);
      } catch (error) {
        console.error(error);
      }
    }
  }
});

export const carsActions = carsSlice.actions;
export default carsSlice.reducer;