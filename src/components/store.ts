import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormValues } from '../types/types';
import { useSelector } from 'react-redux';

type IDataItem = Omit<IFormValues, 'image'> & { image: string };

interface FormState {
  countries: string[];
  data: IDataItem[];
}

const INITIAL_STATE: FormState = {
  countries: ['USA', 'Canada', 'UK', 'Germany', 'France', 'Australia', 'India'],
  data: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState: INITIAL_STATE,
  reducers: {
    setFormDataItem(state, action: PayloadAction<IDataItem>) {
      state.data.push(action.payload);
    },
  },
});

export const { setFormDataItem } = formSlice.actions;

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
