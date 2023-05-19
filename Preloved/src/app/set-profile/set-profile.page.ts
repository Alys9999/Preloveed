import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.page.html',
  styleUrls: ['./set-profile.page.scss'],
})
export class SetProfilePage implements OnInit {
  Name: string = "";
  Bio: string = "";
  Email: string = "";
  PhoneNumber: string = "";

  constructor() { }

  ngOnInit() {
  }

  saveProfile(){
    console.log(this.Name);
  }
}
