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
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(el => el.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser } = userNameSlice.actions;

export default userNameSlice.reducer;
