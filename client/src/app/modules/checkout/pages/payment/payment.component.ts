import { Component, OnInit } from '@angular/core';
import { UserPayment } from 'src/app/interfaces/Payment';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
  }
  sendUserPayment(user:UserPayment){
    this.paymentService.enviarPedido(user)
      .subscribe(console.log)
  }
}
