// import { Component, ViewChild, inject, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import Parse from 'parse'
// import {Platform} from "@ionic/angular";
// import { NavbarComponent } from '../navbar/navbar.component';

// @Component({
//   selector: 'app-folder',
//   templateUrl: './homepage.page.html',
//   styleUrls: ['./homepage.page.scss'],
// })

// export class HomePage implements OnInit {
//   public folder!: string;
//   private activatedRoute = inject(ActivatedRoute);
//   result: string = "What";
//   constructor(private platform: Platform) {
//     Parse.serverURL = 'https://parseapi.back4app.com/';
//     Parse.initialize("L1FFfpsxK7K1wvaTujWJUASQjfvBz5LNUDdPvK5E", "wIgCTMul7e9DrhNlU0oEUW0mlSml2xF05gB0n0BI");

//   }

//   ngOnInit() {
//     this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
//   }
// }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Parse from 'parse';

@Component({
  selector: 'app-folder',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  encapsulation: ViewEncapsulation.None, // DELETE?
})
export class HomePage implements OnInit {
  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize('L1FFfpsxK7K1wvaTujWJUASQjfvBz5LNUDdPvK5E', 'wIgCTMul7e9DrhNlU0oEUW0mlSml2xF05gB0n0BI');
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
