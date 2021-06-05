import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ProfileService} from "../modules/account/profile.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;

  constructor(private router: Router, private profileService: ProfileService) {
    this.userName = this.profileService.getUserName();
  }

  ngOnInit(): void {
  }
}
