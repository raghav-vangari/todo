import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName: string;

  constructor(private profileService: ProfileService) {
    this.userName = profileService.getUserName();
  }

  ngOnInit(): void {
  }


}
