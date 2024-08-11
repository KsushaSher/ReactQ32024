import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IItem, IDetailItem, IApiGetPlanetsVars } from './apiTypes';
import { HYDRATE } from 'next-redux-wrapper';

export interface IGetPlanetsData {
  results: IItem[];
  count: number;
  next: string | null;
  prev: string | null;
}
export interface IApiGetPlanetVars {
  id: string | null;
}

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/planets',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getPlanets: builder.query<IGetPlanetsData, IApiGetPlanetsVars>({
      query: ({ page = '1', search = '' }) =>
        `?page=${page || 1}&search=${search}`,
    }),
    getPlanet: builder.query<IDetailItem, IApiGetPlanetVars>({
      query: ({ id }) => `/${id}/`,
    }),
  }),
});
