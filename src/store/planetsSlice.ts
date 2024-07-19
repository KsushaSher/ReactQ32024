import { createSlice /* PayloadAction */ } from '@reduxjs/toolkit';
import { IItem } from '../api';

type PlanetsState = {
  list: IItem[];
};

const initialState: PlanetsState = {
  list: [],
};

const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    // addTodo(state, action: PayloadAction<string>) {
    //   state.list.push({
    //     id: new Date().toISOString(),
    //     text: action.payload,
    //     completed: false,
    //   });
    // },
    // toggleTodoComplete(state, action: PayloadAction<string>) {
    //   const toggledTodo = state.list.find(todo => todo.id === action.payload);
    //   if (toggledTodo) {
    //     toggledTodo.completed = !toggledTodo.completed;
    //   }
    // },
    // removeTodo(state, action: PayloadAction<string>) {
    //   state.list = state.list.filter(todo => todo.id !== action.payload);
    // },
  },
});

// export const {} = planetSlice.actions; //actions создаются автоматически, их нужно только через деструктуризацию достать как из объекта
export default planetSlice.reducer;
