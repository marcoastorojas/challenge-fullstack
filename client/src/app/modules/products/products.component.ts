import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from 'src/app/interfaces/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService) { }

  get products(): ProductResponse {
    return this.productsService.products
  }


  sendProductToShoppingCart(product: Product) {
    this.shoppingCartService.addProduct(product)
  }
  deleteProductinShoppingCart(id: string) {
    this.shoppingCartService.deleteProduct(id)
  }

  changePage(page:number){
    this.productsService.getProducts(page)
      .subscribe()
  }
  get pages() {
    const totalPages = this.products.totalPages
    let pages = []
    for (let index = 0; index < totalPages; index++) {
      pages[index] = index+1

    }
    return pages
  }
}
