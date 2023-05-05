import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { category, order, sortBy, search, currentPage } = params;
  const { data } = await axios(
    `https://641fd25482bea25f6df5717d.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}${search}
				`,
  );
  return data;
});
const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
      state.status = 'loading';
      state.items = [];
      console.log('Идет отправка запроса');
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
      console.log(state, 'Все ОК');
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
      console.log('Произошла ошибка');
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
