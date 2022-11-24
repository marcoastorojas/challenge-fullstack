import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }
  get cart(): Product[] { return this.shoppingCartService.cart }
  ngOnInit(): void {
  }

}
