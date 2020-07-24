import { Todo } from "../interface/todo";
import {
  ACTION_ADD_TODO,
  ACTION_UPDATE_TODO,
  ACTION_DELETE_TODO,
} from "../common/consts";

export const addTodo = (item: Todo) => ({
  type: ACTION_ADD_TODO,
  payload: item,
});

export const updateTodo = (id: string) => ({
  type: ACTION_UPDATE_TODO,
  payload: id,
});

export const deleteTodo = (id: string) => ({
  type: ACTION_DELETE_TODO,
  payload: id,
});
