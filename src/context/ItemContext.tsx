import createDataContext from "./createDataContext";

import { ITodo, ITodoAction } from "../interface/todo";

const reducer = (state: ITodo[], action: ITodoAction) => {
  switch (action.type) {
    case "add_todo":
      return [...state, action.payload];

    case "update_todo_status":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            active: !item.active,
          };
        }

        return item;
      });

    case "delete_todo":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const addTodo = (dispatch: Function) => (item: ITodo) => {
  dispatch({ type: "add_todo", payload: item });
};

const updateTodoStatus = (dispatch: Function) => (id: string) => {
  dispatch({ type: "update_todo_status", payload: id });
};

const deleteTodo = (dispatch: Function) => (id: string) => {
  dispatch({ type: "delete_todo", payload: id });
};

const actions = {
  addTodo,
  updateTodoStatus,
  deleteTodo,
};

const defaultState: ITodo[] = [
  {
    id: "1",
    title: "Lorum Ipsum",
    active: true,
  },
];

export const { Context, Provider } = createDataContext(
  reducer,
  actions,
  defaultState
);
