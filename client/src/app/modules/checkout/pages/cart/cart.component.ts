import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }
  get cart():Product[]{
    return this.shoppingCartService.cart
  }

  verdata(){
    console.log(this.cart)
  }
  ngOnInit(): void {
  }
  deleteProductinShoppingCart(id:string){
    this.shoppingCartService.deleteProduct(id)
  }

}
