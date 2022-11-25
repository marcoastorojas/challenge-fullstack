import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionRoutingModule } from './direction-routing.module';
import { DirectionComponent } from './direction.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DirectionComponent
  ],
  imports: [
    CommonModule,
    DirectionRoutingModule,
    FormsModule
  ]
})
export class DirectionModule { }
