import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionRoutingModule } from './direction-routing.module';
import { DirectionComponent } from './direction.component';


@NgModule({
  declarations: [
    DirectionComponent
  ],
  imports: [
    CommonModule,
    DirectionRoutingModule
  ]
})
export class DirectionModule { }
