import { configureStore } from '@reduxjs/toolkit';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newDodoObj = { text: action.text, id: Date.now() };
      return [...state, newDodoObj];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const todoStore = configureStore({
  reducer: todoReducer
});

export default todoStore;
