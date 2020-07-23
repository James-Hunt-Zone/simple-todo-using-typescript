import React, { useContext } from "react";

import { ITodo } from "../interface/todo";
import { Context as TodoContext } from "../context/ItemContext";
import { ITodoContextData } from "../interface/todo";

const TodoListItem: React.FC<ITodo> = ({ id, title, active }) => {
  const { updateTodoStatus, deleteTodo } = useContext(
    TodoContext
  ) as ITodoContextData;

  const onToggleHandler = (event: React.MouseEvent) => {
    updateTodoStatus(id);
  };

  const onDeleteHandler = (event: React.MouseEvent) => {
    deleteTodo(id);
  };

  return (
    <li
      onClick={onToggleHandler}
      style={{ textDecoration: active ? "none" : "line-through" }}
    >
      {title} - <button onClick={onDeleteHandler}>Delete</button>
    </li>
  );
};

export default TodoListItem;
