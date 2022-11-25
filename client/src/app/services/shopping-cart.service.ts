import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _cart: Product[] = []

  addProduct(product: Product) {
    this._cart = [product, ...this._cart]
  }
  deleteProduct(id: string) {
    this._cart = this._cart.filter(product => product._id !== id)
  }
  
  resetCart(){
    this._cart = []
  }
  get cart() {
    return [...this._cart]
  }

  constructor() { }
}
