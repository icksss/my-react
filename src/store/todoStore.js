import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';

// const addCmdJson = (text) => {
//   return { type: ADD_TODO, text, id: Date.now() };
// };
// const deleteCmdJson = (id) => {
//   return { type: DELETE_TODO, id };
// };

// const todoReducer = (state = [], action) => {
//   switch (action.type) {
//     case addto.type:
//       const newDodoObj = { text: action.payload, id: Date.now() };
//       return [...state, newDodoObj];
//     case deleteto.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const addto = createAction('ADD');
// const deleteto = createAction('DELETE');
// const todoReducer = createReducer([], (builder) => {
//   builder
//     .addCase(addto, (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteto, (state, action) => {
//       return state.filter((todo) => todo.id !== action.payload);
//     });
// });

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    }
  }
});

const todoStore = configureStore({
  reducer: todoSlice.reducer
});

// const actionCreator = {
//   addto,
//   deleteto
// };

export const { add, remove } = todoSlice.actions;

// export { todoStore, addCmdJson, deleteCmdJson };
export { todoStore };
