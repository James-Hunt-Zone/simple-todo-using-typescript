export interface ITodo {
  id: string;
  title: string;
  active: boolean;
}

export interface ITodoAction {
  type: string;
  payload?: ITodo | string;
}

export interface ITodoContextData {
  state: ITodo[];
  addTodo: Function;
  updateTodoStatus: Function;
  deleteTodo: Function;
}
