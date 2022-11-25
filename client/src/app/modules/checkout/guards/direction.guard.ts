import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionGuard implements CanActivate, CanLoad {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.shoppingCartService.cart.length) {
      this.router.navigate(['/checkout/cart'])
      return false
    }
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.shoppingCartService.cart.length) {
      this.router.navigate(['/checkout/cart'])
      return false
    }
    return true;
  }
}
