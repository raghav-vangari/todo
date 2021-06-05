import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userName: string;

  constructor() { }

  getUserName(): string {

    this.userName = localStorage.getItem('ACCESS_TOKEN');
    if( this.userName !== null ) {
      return this.userName;
    }
  }
}
