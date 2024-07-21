export interface IItem {
  url: string;
  name: string;
  orbital_period: number;
  population: number;
}

export interface IDetailItem {
  url: string;
  name: string;
  orbital_period: number;
  population: number;
  rotation_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
}

export interface IApiGetPlanetsVars {
  search?: string;
  page?: string | null;
}

// export const API = {
//   getPlanets: async ({ search = '', page }: IApiGetPlanetsVars) => {
//     return fetch(
//       `https://swapi.dev/api/planets?page=${page || 1}&search=${search}`,
//     ).then(res => res.json());
//   },
//   getPlanet: async (id: string) => {
//     return fetch(`https://swapi.dev/api/planets/${id}/`).then(res =>
//       res.json(),
//     );
//   },
// };
