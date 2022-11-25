import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDirectionService {
  userDirection: any
  constructor() { }
  setUserDirection(userDirection: any) {
    this.setUserDirection = userDirection
  }
}
