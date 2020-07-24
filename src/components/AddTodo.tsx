import React, { FormEvent, useRef, useContext } from "react";
import { Context as TodoContext } from "../context/TodoContext";
import { addTodo } from "../actions/todo";

const AddTodo: React.FC = () => {
  const { dispatch } = useContext(TodoContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const inputValue = textInputRef.current!.value;

    if (inputValue.trim() === "") {
      return;
    }

    dispatch(
      addTodo({
        id: new Date().getTime().toString(),
        title: textInputRef.current!.value,
        active: true,
      })
    );

    textInputRef.current!.value = "";
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
