import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './direction.component';

const routes: Routes = [{
  path:"",
  component:DirectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionRoutingModule { }
