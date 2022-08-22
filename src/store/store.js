import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

// Crear Store
export const store = configureStore({
  reducer: {
    // Usar el reducer de nuestro slice
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    // RTK Query
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // 
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( todosApi.middleware )
})