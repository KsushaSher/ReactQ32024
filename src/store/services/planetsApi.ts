import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IItem, IDetailItem, IApiGetPlanetsVars } from '../../api';

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

// export const API = {
//     getPlanets: async ({ search = '', page }: IApiGetPlanetsVars) => {
//       return fetch(
//         `https://swapi.dev/api/planets?page=${page || 1}&search=${search}`,
//       ).then(res => res.json());
//     },
//     getPlanet: async (id: string) => {
//       return fetch(`https://swapi.dev/api/planets/${id}/`).then(res =>
//         res.json(),
//       );
//     },
//   };
