import { combineReducers, configureStore } from '@reduxjs/toolkit';
import planetsReducer from './planetsSlice';
import { planetsApi } from './planetsApi';

const rootReducer = combineReducers({
  planets: planetsReducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
});

export const makeStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(planetsApi.middleware),
    preloadedState,
  });

const store = makeStore();

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
