import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimatePageRoutingModule } from './estimate-routing.module';


import { EstimatePage } from './estimate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EstimatePage]
})
export class EstimatePageModule {}
