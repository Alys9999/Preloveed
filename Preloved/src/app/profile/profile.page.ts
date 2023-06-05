import { Component, OnInit } from '@angular/core';
import {GenerateData} from '../../info/generateData';
import { User } from 'src/info/User';
import Parse from "parse";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
user: User | undefined;
name: string | undefined;
bio: string | undefined;
email: string | undefined;
phoneNumber: string | undefined;  
  constructor() {
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

}
