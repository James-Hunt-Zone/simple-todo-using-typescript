import React, { useReducer } from "react";

type ActionWithPayload = {
  type: string;
  username: string;
};

type ActionWithoutPayload = {
  type: string;
};

type Action = ActionWithoutPayload | ActionWithPayload;

interface Actions<T> {
  [index: string]: T;
}

interface R {
  state: any;
  action: object;
}

export default (
  reducer: (state: any, action: Action) => any,
  actions: Actions<Function>,
  defaultState: object
) => {
  const Context = React.createContext(defaultState);

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const boundActions: Actions<Function> = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return {
    Context,
    Provider,
  };
};
