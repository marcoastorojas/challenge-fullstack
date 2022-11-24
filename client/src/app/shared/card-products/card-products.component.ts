import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent {

  @Input() dataCard!: Product
  @Output() onAddCard = new EventEmitter<Product>()
  @Output() onRemoveCard = new EventEmitter<string>()
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }
  isInCart(): boolean {
    return this.shoppingCartService.cart.some(product => product._id === this.dataCard._id)
  }
  addProduct() {
    this.onAddCard.emit(this.dataCard)
  }
  removeProduct() {
    this.onRemoveCard.emit(this.dataCard._id)
  }
}
