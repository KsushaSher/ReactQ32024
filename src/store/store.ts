import { configureStore } from '@reduxjs/toolkit';
import planetsReducer from './planetsSlice';
import { planetsApi } from './services/planetsApi';

// export const store = configureStore({
//   reducer: {
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
// });

// setupListeners(store.dispatch);

const store = configureStore({
  reducer: {
    planets: planetsReducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(planetsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
