import { Component, OnInit } from '@angular/core';
import {GenerateData} from '../../info/generateData';
import { User } from 'src/info/User';
import Parse from "parse";
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.page.html',
  styleUrls: ['./set-profile.page.scss'],
})
export class SetProfilePage implements OnInit {
  user: User | undefined;
  name: string | undefined;
  bio: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;  

  constructor(private router: Router) {
    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("L1FFfpsxK7K1wvaTujWJUASQjfvBz5LNUDdPvK5E", "wIgCTMul7e9DrhNlU0oEUW0mlSml2xF05gB0n0BI");
   }

  ngOnInit() {
    this.user = GenerateData.getCurrentUser();
    this.name = this.user.username;
    this.bio = this.user.biography;
    this.email = this.user.email;
    this.phoneNumber = this.user.phoneNumber;
  }

  async saveProfile(){
    await GenerateData.updateCurrentUser("username", this.name);
    await GenerateData.updateCurrentUser("email", this.email);
    await GenerateData.updateCurrentUser("phoneNumber", this.phoneNumber);
    await GenerateData.updateCurrentUser("biography", this.bio);
   // await GenerateData.current_user=GenerateData.getCurrentUser();
   this.router.navigate(['./profile']);
  }
}
