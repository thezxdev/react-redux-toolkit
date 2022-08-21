import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

// Crear Store
export const store = configureStore({
  reducer: {
    // Usar el reducer de nuestro slice
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  }
})