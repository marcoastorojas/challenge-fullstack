import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserPayment } from 'src/app/interfaces/Payment';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserDirectionService } from '../../direction/services/user-direction.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = "http://localhost:3000"
  constructor(
    private userDirectionService: UserDirectionService,
    private shoppingCartService: ShoppingCartService
  ) { }
  userPayment!: UserPayment
  enviarPedido(userPayment: UserPayment) {
    console.log({
      userPayment,
      userDirection: this.userDirectionService.userDirection,
      products: this.shoppingCartService.cart
    })
    return of("todo correcto")
  }

}
