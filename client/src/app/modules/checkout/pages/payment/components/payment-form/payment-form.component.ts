import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserPayment } from 'src/app/interfaces/Payment';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  @Output("onPaymentReady") onPaymentReady = new EventEmitter<UserPayment>() 

  constructor(private fb:FormBuilder) { }
  FormPayment:FormGroup= this.fb.group({
    cardType:["",Validators.required],
    name:["",Validators.required],
    cardNumber:["",Validators.required],
    expire:["",Validators.required],
    cvv:["",Validators.required]
  })

  ngOnInit(): void {
  }
  sendPayment(){
    if(this.FormPayment.invalid)return
    this.onPaymentReady.emit(this.FormPayment.value)
  }
}
