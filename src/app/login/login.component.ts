import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reg_confirm_password: string;
  reg_password: string;
  reg_email: string;
  log_email: string;
  log_password: string;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {}

  login(){
    if(this.log_email == "admin" && this.log_password == "password"){
      this.authService.login(this.log_email);

      this.route.navigate(['/home']);
    }
  }

  register(){

  }
}
