import React, { FormEvent, useRef, useContext } from "react";

import { Context as TodoContext } from "../context/ItemContext";
import { ITodoContextData } from "../interface/todo";

const AddTodo: React.FC = () => {
  const { addTodo } = useContext(TodoContext) as ITodoContextData;

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    addTodo({
      id: new Date().getTime().toString(),
      title: textInputRef.current!.value,
      active: true,
    });
  };

  return (
    <form>
      <label htmlFor="add-todo">Add a todo</label>
      <input type="text" id="add-todo" name="add-todo" ref={textInputRef} />
      <input type="submit" value="Add" onClick={submitHandler} />
    </form>
  );
};

export default AddTodo;
