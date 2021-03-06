import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { CreateTodoComponent } from './modules/todo/create-todo/create-todo.component'
import { ListTodoComponent } from './modules/todo/list-todo/list-todo.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateTodoComponent, canActivate: [AuthGuard]},
  { path: 'todoList', component: ListTodoComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
