import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../store/models/todo.model';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ListTodoModel} from "../../../store/models/listTodo.model";
import { AddTodoAction, DeleteTodoAction } from '../../../store/actions/todo.action';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo = {user: '', name: '', timestamp: 0};

  todolist: Observable<Array<Todo>>;

  constructor(private store: Store<ListTodoModel>) {

  }

  ngOnInit(): void {
    this.todolist = this.store.select(store => store.todoList);
  }

  addTodo() {
    this.todo.user = localStorage.getItem('ACCESS_TOKEN');
    this.store.dispatch(new AddTodoAction(this.todo));
    this.todolist = this.store.select(store => store.todoList);
    console.log('in create list ', this.todolist)
    this.todo = {user: '', name: '', timestamp: 0};
  }
}
