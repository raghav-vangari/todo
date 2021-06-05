import {Action} from "@ngrx/store";
import {Todo} from "../models/todo.model";

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {
  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: string) {
  }
}

export type TodoActions = AddTodoAction | DeleteTodoAction;
