import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import Parse from "parse";
import {Router} from "@angular/router";
import {GenerateData} from "../../info/generateData";
import {PreLovedCard} from "../../info/PreLovedCard";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(private toastController: ToastController, private router: Router) {
    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("L1FFfpsxK7K1wvaTujWJUASQjfvBz5LNUDdPvK5E", "wIgCTMul7e9DrhNlU0oEUW0mlSml2xF05gB0n0BI");
  }

  ngOnInit() {
    if(Parse.User.current() != null){
      this.logOut();
    }
  }

  signIn() {
    Parse.User.logIn(this.username, this.password).then((resp: String) => {
      //Create current_user data
      GenerateData.current_user = GenerateData.getCurrentUser();

      //TEST
      let getPreLoved = GenerateData.getPreLovedCardById("eR8sUHXV8M");
      console.log(getPreLoved);

      // jump to home page
      this.router.navigateByUrl('/folder/inbox');
    }, (err: { message: any; }) => {
      console.log('Error logging in', err);

      this.toastController.create({
        message: err.message,
        duration: 2000
      }).then((toast) => {
        toast.present();
      });
    });
  }

  signUp() {
    if(this.username == '' || this.password == null){
      this.toastController.create({
        message: 'Invalid username or password',
        duration: 2000
      }).then((toast) => {
        toast.present();
      });
      return;
    }

    Parse.User.signUp(this.username, this.password).then((resp: String) => {
      // Clears up the form
      this.username = '';
      this.password = '';

      this.toastController.create({
        message: 'Account created successfully',
        duration: 2000
      }).then((toast) => {
        toast.present();
      });

      //Create current_user data
      GenerateData.current_user = GenerateData.getCurrentUser();

      // jump to home page
      this.router.navigateByUrl('/folder/inbox');

    }, (err: { message: any; }) => {
      console.log('Error signing in', err);

      this.toastController.create({
        message: err.message,
        duration: 2000
      }).then((toast) => {
        toast.present();
      });
    });
  }

  logOut() {
    Parse.User.logOut().then(() => {
      console.log('Logged out successfully');
    }, (err: { message: any; }) => {
      console.log('Error logging out', err);

      this.toastController.create({
        message: err.message,
        duration: 2000
      }).then((toast) => {
        toast.present();
      });
    });
  }
}
