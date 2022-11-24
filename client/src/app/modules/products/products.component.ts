import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService) { }

  get products(): Product[] {
    return this.productsService.products
  }

  sendProductToShoppingCart(product: Product) {
    this.shoppingCartService.addProduct(product)
  }
  deleteProductinShoppingCart(id: string) {
    this.shoppingCartService.deleteProduct(id)
  }
  ngOnInit(): void {
  }
  verdata(){
    console.log(this.products)
  }
}
