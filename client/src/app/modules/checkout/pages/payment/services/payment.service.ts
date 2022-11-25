import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserPayment } from 'src/app/interfaces/Payment';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserDirectionService } from '../../direction/services/user-direction.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = "https://challenge-fullstack.tk/api"
  constructor(
    private userDirectionService: UserDirectionService,
    private shoppingCartService: ShoppingCartService,
    private http:HttpClient
  ) { }
  enviarPedido(userPayment: UserPayment) {
    return this.http.post(`${this.baseUrl}/order`,{
      payment:userPayment,
      direction:this.userDirectionService.userDirection,
      products:this.shoppingCartService.cart
    })
    this.shoppingCartService.resetCart()
  }

}
