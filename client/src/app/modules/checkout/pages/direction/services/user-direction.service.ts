import { Injectable } from '@angular/core';
import { UserDirection } from 'src/app/interfaces/Directions';

@Injectable({
  providedIn: 'root'
})
export class UserDirectionService {
  userDirection!: UserDirection
  constructor() { }
  setUserDirection(userDirection: UserDirection) {
    this.userDirection = userDirection
  }
}
