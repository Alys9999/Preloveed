import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ColumnviewComponent } from './columnview.component';

@NgModule({
    declarations: [ColumnviewComponent],
    imports: [CommonModule, IonicModule],
    exports: [ColumnviewComponent],
})
export class Columnviewmodule {}