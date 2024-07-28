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
