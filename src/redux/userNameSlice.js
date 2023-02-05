import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userNameSlice.actions;

export default userNameSlice.reducer;
