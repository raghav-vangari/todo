import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../store/models/todo.model';
import { ListTodoModel } from '../../../store/models/listTodo.model';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todolist: Observable<Array<Todo>>;

  constructor(private store: Store<ListTodoModel>) {
  }

  ngOnInit(): void {
    this.todolist = this.store.select(store => store.listTodo);
    console.log('list ', this.todolist);
  }


}
