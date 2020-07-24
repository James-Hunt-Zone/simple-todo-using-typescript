import React, { useContext } from "react";
import { Todo } from "../interface/todo";
import { Context as TodoContext } from "../context/TodoContext";
import { updateTodo, deleteTodo } from "../actions/todo";

const TodoListItem: React.FC<Todo> = ({ id, title, active }) => {
  const { dispatch } = useContext(TodoContext);

  const onToggleHandler = (event: React.MouseEvent) => {
    dispatch(updateTodo(id));
  };

  const onDeleteHandler = (event: React.MouseEvent) => {
    dispatch(deleteTodo(id));
  };

  const style = {
    ...(!active && { textDecoration: "line-through" }),
  };

  return (
    <li onClick={onToggleHandler} style={style}>
      {title} - <button onClick={onDeleteHandler}>Delete</button>
    </li>
  );
};

export default TodoListItem;
