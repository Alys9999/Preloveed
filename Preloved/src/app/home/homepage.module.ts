import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { HomepageRoutingModule } from './homepage-routing.module';

import { HomePage } from './homepage.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomepageRoutingModule,
    FormsModule,
  ],
  declarations: [HomePage]
})
export class HomepagePageModule {}
