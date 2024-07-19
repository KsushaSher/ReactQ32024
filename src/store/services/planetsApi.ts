import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IItem, IApiGetPlanetsVars } from '../../api';

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets' }),
  endpoints: builder => ({
    getPlanets: builder.query<IItem, IApiGetPlanetsVars>({
      query: ({ page = '1', search = '' }) =>
        `?page=${page || 1}&search=${search}`,
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
