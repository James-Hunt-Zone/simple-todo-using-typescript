import React, { useContext } from "react";

import { Context as TodoContext } from "../context/ItemContext";
import { ITodoContextData } from "../interface/todo";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  const { state: todoList } = useContext(TodoContext) as ITodoContextData;

  return (
    <ul>
      {todoList.map((item) => (
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
