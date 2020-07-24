import React, { FormEvent, useRef, useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Context as TodoContext } from "../context/TodoContext";
import { addTodo } from "../actions/todo";

const Form = styled.form`
  padding: 1rem 0;
  border-bottom: 1px solid #dedede;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  padding: 0;
  padding-bottom: 0.5rem;
  margin: 0;
`;

const Input = styled.input`
  font-size: 1.4rem;
`;

const Submit = styled.button`
  background: none;
  border: none;
`;

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
    <Form>
      <Heading>
        <label htmlFor="add-todo">Add a todo</label>
      </Heading>
      <div>
        <Input type="text" id="add-todo" name="add-todo" ref={textInputRef} />
        <Submit type="button" onClick={submitHandler}>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </Submit>
      </div>
    </Form>
  );
};

export default AddTodo;
