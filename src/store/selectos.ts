import { RootState } from './store';

export const getIsSelected = (state: RootState, id: string) =>
  state.planets.selected.includes(id);

export const getCount = (state: RootState) => state.planets.selected.length;

export const getArraySelectedId = (state: RootState) => state.planets.selected;
