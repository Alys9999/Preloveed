import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetProfilePageRoutingModule } from './set-profile-routing.module';

import { SetProfilePage } from './set-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetProfilePageRoutingModule
  ],
  declarations: [SetProfilePage]
})
export class SetProfilePageModule {}
