import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent
  ],
  providers: [ProfileService]
})
export class AccountModule { }
