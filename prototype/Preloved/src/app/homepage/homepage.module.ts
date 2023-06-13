import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomePage } from './homepage.page';
import { NavbarModule } from '../components/navbar/navbar.module';
import { ProductcardModule } from '../components/productcard/productcard.module';
import { Homeproductcardmodule } from '../components/homeproductcard/homeproductcard.module';
import { Columnviewmodule } from '../components/columnview/columnview.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HomepageRoutingModule,
    NavbarModule,
    ProductcardModule,
    Homeproductcardmodule,
    Columnviewmodule
  ],
  declarations: [HomePage],
})
export class HomepagePageModule {}