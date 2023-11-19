import { createSlice } from '@reduxjs/toolkit';


const initialState = { 
  filter: "",
  
};

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
  
    inputFilter(state, { payload }) {
     state.filter = payload;
    },

},
});

// Генератори екшен криейторів
export const { inputFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
