import { createSlice } from '@reduxjs/toolkit';

const initialState = { salad: 0, bacon: 0, cheese: 0, meat: 0 };

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateIngredients: () => {},
  },
});

export const { updateIngredients } = slice.actions;

export default slice.reducer;
