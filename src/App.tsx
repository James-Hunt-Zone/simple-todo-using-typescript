import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Provider as TodoProvider } from "./context/ItemContext";

const App: React.FC = () => {
  return (
    <>
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </>
  );
};

export default App;
