import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {
    path: "",
    component: CheckoutComponent,
    children: [
      {
        path: "cart",
        loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: "payment",
        loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: "direction",
        loadChildren: () => import('./pages/direction/direction.module').then(m => m.DirectionModule)
      },
      {
        path:"**",
        redirectTo:"cart",
        pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
