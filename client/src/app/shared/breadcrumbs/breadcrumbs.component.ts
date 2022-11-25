import { Component, OnInit } from '@angular/core';
import { UserDirectionService } from 'src/app/modules/checkout/pages/direction/services/user-direction.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private userDirectionService: UserDirectionService
  ) { }
  directionAvailable(): boolean {
    return this.shoppingCartService.cart.length ? true : false
  }
  paymentAvailable(): boolean {
    return this.userDirectionService.userDirection ? true : false
  }
  ngOnInit(): void {
  }

}
