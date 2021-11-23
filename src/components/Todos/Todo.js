import React from "react";

const Todo = ({ todo, index, handleDeleteTodo, handleEditTodo, isLoading }) => {
  return (
    <div className="todo">
      <span className="todo-text">{todo.text}</span>
      <span
        onClick={!isLoading ? () => handleDeleteTodo(todo.id) : undefined}
        className="todo-delete"
      >
        <i className="fa fa-trash"> </i>
      </span>
      <span onClick={() => handleEditTodo(todo)} className="todo-edit">
        ✎
      </span>
    </div>
  );
};

export default Todo;
