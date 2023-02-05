import { configureStore } from '@reduxjs/toolkit';
import usersReduser from './userNameSlice';

export const store = configureStore({
  reducer: {
    name: usersReduser,
  },
});
