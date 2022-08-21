import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';

// Crear Store
export const store = configureStore({
  reducer: {
    // Usar el reducer de nuestro slice
    counter: counterSlice.reducer,
  }
})