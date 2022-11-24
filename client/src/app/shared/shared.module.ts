import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CardProductsComponent } from './card-products/card-products.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    CardProductsComponent
  ]
})
export class SharedModule { }
