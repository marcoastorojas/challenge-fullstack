import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
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
