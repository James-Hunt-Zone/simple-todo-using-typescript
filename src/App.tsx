import React from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Provider as TodoProvider } from "./context/TodoContext";

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #7b7b7b;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #dedede;
  padding: 0 1rem;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </Wrapper>
  );
};

export default App;
