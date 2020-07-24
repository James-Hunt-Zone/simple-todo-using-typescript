import React, { useReducer } from "react";
import { TodoAction, Todo } from "../interface/todo";
import {
  ACTION_ADD_TODO,
  ACTION_UPDATE_TODO,
  ACTION_DELETE_TODO,
} from "../common/consts";

interface ContextModal {
  state: State;
  dispatch: any;
}

interface State extends Array<Todo> {}

const defaultState: State = [
  {
    id: "1",
    title: "Lorum Ipsum",
    active: true,
  },
];

const reducer = (state: State, action: TodoAction): State => {
  switch (action.type) {
    case ACTION_ADD_TODO:
      return [...state, action.payload as Todo];

    case ACTION_UPDATE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            active: !item.active,
          };
        }

        return item;
      });

    case ACTION_DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export const Context: React.Context<ContextModal> = React.createContext({
  state: defaultState,
  dispatch: null,
});

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
