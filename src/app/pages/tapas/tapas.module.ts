import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TapasPage } from './tapas.page';
import { TapasPageRoutingModule } from './tapas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TapasPageRoutingModule
  ],
  declarations: [TapasPage]
})
export class TapasPageModule {}
