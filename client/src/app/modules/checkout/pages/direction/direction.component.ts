import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Country, UserDirection } from 'src/app/interfaces/Directions';
import { DirectionService } from './services/direction.service';
import { UserDirectionService } from './services/user-direction.service';


@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent {
  constructor(
    private directionService: DirectionService,
    private fb: FormBuilder,
    private userDirectionService: UserDirectionService) { }

  get countries(): Country[] {
    return this.directionService.countries
  }

  changeUserDirection(userDirection: UserDirection) {
    this.userDirectionService.setUserDirection(userDirection)
  }
}
