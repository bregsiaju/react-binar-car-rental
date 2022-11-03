import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  showBtn: true
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    toggleDisplay(state) {
      state.showBtn = !state.showBtn;
    }
  }
});

export const buttonActions = buttonSlice.actions;

export default buttonSlice.reducer;