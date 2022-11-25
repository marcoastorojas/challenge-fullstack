import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDirectionService } from '../pages/direction/services/user-direction.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate, CanLoad {
  constructor(
    private userDirectionService: UserDirectionService,
    private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userDirectionService.userDirection) {
      this.router.navigate(['/checkout/direction'])
    }
    return this.userDirectionService.userDirection ? true : false
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userDirectionService.userDirection) {
      this.router.navigate(['/checkout/direction'])
    }
    return this.userDirectionService.userDirection ? true : false
  }
}
