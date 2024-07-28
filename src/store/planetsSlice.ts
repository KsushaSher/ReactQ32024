import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PlanetsState = {
  selected: string[];
};

export const initialState: PlanetsState = {
  selected: [],
};

const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.selected.includes(id)) {
        state.selected = state.selected.filter(item => item !== id);
      } else {
        state.selected.push(id);
      }
    },
    reset() {
      return initialState;
    },
  },
});

export const { setSelected, reset } = planetSlice.actions; //actions создаются автоматически, их нужно только через деструктуризацию достать как из объекта
export default planetSlice.reducer;
