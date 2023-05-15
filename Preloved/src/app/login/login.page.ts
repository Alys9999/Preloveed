import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import Parse from "parse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = "123";
  public password: string = "123";

  constructor(private toastController: ToastController, private router: Router) {
    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("L1FFfpsxK7K1wvaTujWJUASQjfvBz5LNUDdPvK5E", "wIgCTMul7e9DrhNlU0oEUW0mlSml2xF05gB0n0BI");
  }

  ngOnInit() {
  }

  signIn() {
    Parse.User.logIn(this.username, this.password).then((resp: String) => {
      console.log('Logged in successfully', resp);

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

    Parse.User.signUp(this.username, this.password).then((resp: String) => {
      console.log('Logged in successfully', resp);

      // Clears up the form
      this.username = '';
      this.password = '';

      this.toastController.create({
        message: 'Account created successfully',
        duration: 2000
      }).then((toast) => {
        toast.present();
      });
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
}
