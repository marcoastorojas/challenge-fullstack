import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionRoutingModule } from './direction-routing.module';
import { DirectionComponent } from './direction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDirectionComponent } from './components/form-direction/form-direction.component';



@NgModule({
  declarations: [
    DirectionComponent,
    FormDirectionComponent
  ],
  imports: [
    CommonModule,
    DirectionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DirectionModule { }
