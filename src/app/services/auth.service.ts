import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userName: string){
    localStorage.setItem('ACCESS_TOKEN', userName);
    console.log(localStorage.getItem('ACCESS_TOKEN'));
  }

  public isLoggedIn(){
    console.log('came here')
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
