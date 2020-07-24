import React, { useContext } from "react";
import styled from "styled-components";
import { Context as TodoContext } from "../context/TodoContext";
import TodoListItem from "./TodoListItem";

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

const TodoList: React.FC = () => {
  const { state: todos } = useContext(TodoContext);

  return todos.length > 0 ? (
    <List>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          title={item.title}
          active={item.active}
        />
      ))}
    </List>
  ) : (
    <h2>No todos!</h2>
  );
};

export default TodoList;
