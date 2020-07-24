import React, { useContext } from "react";
import { Context as TodoContext } from "../context/TodoContext";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  const { state: todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          title={item.title}
          active={item.active}
        />
      ))}
    </ul>
  );
};

export default TodoList;
