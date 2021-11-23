import { ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS } from "../actions/types";

const initialState = {
  todos: [],
  text: "",
  selected: undefined,
};

export const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            data: data,
          },
        ],
      };
    case DELETE_TODO:
      const newList = state.todos.filter((todo) => todo.id !== action.id);
      console.log({ action });
      return {
        ...state,
        todos: newList,
      };
    case DELETE_ALL_TODOS:
      return { ...state, todos: [] };
    default:
      return state;
  }
};
