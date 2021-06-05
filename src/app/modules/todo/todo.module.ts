import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from '../account/account.module';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CreateTodoComponent, ListTodoComponent],
  imports: [
    CommonModule,
    AccountModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
