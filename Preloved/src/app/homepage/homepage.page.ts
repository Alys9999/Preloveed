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
import {ElementRef, HostListener, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GestureDetail } from '@ionic/core';
import { Gesture, GestureController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import Parse from 'parse';

@Component({
  selector: 'app-folder',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  encapsulation: ViewEncapsulation.None, // DELETE?
})
export class HomePage implements OnInit {
  public folder!: string;
  public isFeatured = false; // current featured card component
  public isSimilarItemsOpen = false;
  // public isBgBlurred = false;

  constructor(private activatedRoute: ActivatedRoute) {
    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize('L1FFfpsxK7K1wvaTujWJUASQjfvBz5LNUDdPvK5E', 'wIgCTMul7e9DrhNlU0oEUW0mlSml2xF05gB0n0BI');
  }

  // removeBg(event: unknown) {
  //   this.isBgBlurred = false;
  // }

  setSimilarItemsOpen(isOpen: boolean) {
    this.isSimilarItemsOpen = isOpen;
  }

  DisplayMoreInfo(event: unknown) {
    // this.isBgBlurred = true;
    if (!this.isFeatured)
      this.isFeatured = true;
    else
      this.isFeatured = false;
    console.log("hello")
    
  }

  // collapseInfo(event: unknown) {
  //   this.isFeatured = false;
  // }

  fadeAnimation = trigger('fadeAnimation', [
    state('hidden', style({ opacity: 0 })),
    state('visible', style({ opacity: 1 })),
    transition('hidden <=> visible', animate('300ms ease-in-out')),
  ]);

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
