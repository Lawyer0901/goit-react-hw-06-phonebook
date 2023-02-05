import { createSlice } from '@reduxjs/toolkit';

export const phoneNumberSlice = createSlice({
  phone: 'phone',
  initialState: [],
  reducers: {
    addPhone(store) {},
  },
});

// Action creators are generated for each case reducer function
export const { addPhone } = phoneNumberSlice.actions;

export default phoneNumberSlice.reducer;
