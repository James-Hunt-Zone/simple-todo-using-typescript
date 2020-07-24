import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Todo } from "../interface/todo";
import { Context as TodoContext } from "../context/TodoContext";
import { updateTodo, deleteTodo } from "../actions/todo";

const ListItem = styled.li`
  display: flex;
  border: 1px solid #dedede;
  padding: 2em;
  margin: 0;
  margin-bottom: 1rem;
  list-style: none;
  box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.39);
`;

const Title = styled.span`
  flex: 1;
`;

const Submit = styled.button`
  background: none;
  border: none;
`;

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
    <ListItem onClick={onToggleHandler} style={style}>
      <Title>{title}</Title>
      <Submit onClick={onDeleteHandler}>
        <FontAwesomeIcon icon={faTrash} size="2x" />
      </Submit>
    </ListItem>
  );
};

export default TodoListItem;
