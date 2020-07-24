export interface Todo {
  id: string;
  title: string;
  active: boolean;
}

export interface TodoAction {
  type: string;
  payload?: Todo | string;
}
