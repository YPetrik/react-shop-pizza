import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';

console.log(filter);
export const store = configureStore({
  reducer: {
    filter,
  },
});
