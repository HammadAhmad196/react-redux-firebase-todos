import { ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS } from "./types";

export const AddTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const DeleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const deleteAll = () => ({
  type: DELETE_ALL_TODOS,
});
