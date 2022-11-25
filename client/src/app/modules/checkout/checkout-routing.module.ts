import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { DirectionGuard } from './guards/direction.guard';
import { PaymentGuard } from './guards/payment.guard';

const routes: Routes = [
  {
    path: "",
    component: CheckoutComponent,
    children: [
      {
        path: "cart",
        loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
      },
      {
        path: "payment",
        loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule),
        canActivate: [PaymentGuard],
        canLoad: [PaymentGuard]
      },
      {
        path: "direction",
        loadChildren: () => import('./pages/direction/direction.module').then(m => m.DirectionModule),
        canActivate: [DirectionGuard],
        canLoad: [DirectionGuard]
      },
      {
        path: "**",
        redirectTo: "cart",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
