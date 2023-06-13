import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GeneralHeaderComponent } from './general-header.component';

@NgModule({
    declarations: [GeneralHeaderComponent],
    imports: [CommonModule, IonicModule],
    exports: [GeneralHeaderComponent],
})
export class GeneralHeadermodule {}