import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  get cart() {
    return this.shoppingcartService.cart
  }

  constructor(
    private shoppingcartService: ShoppingCartService,
    private route:Router) { }

  isInCheckoutPath(){
    return this.route.url.substring(0,9) === "/checkout"
  }
  
  ngOnInit(): void {
  }

}
