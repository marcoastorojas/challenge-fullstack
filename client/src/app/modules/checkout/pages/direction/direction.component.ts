import { Component, OnInit } from '@angular/core';
import { Country, State } from 'src/app/interfaces/Directions';
import { DirectionService } from './services/direction.service';


@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {

  constructor(private directionService: DirectionService) { }
  currentCountry = ""
  currentState = ""
  get countries(): Country[] {
    return this.directionService.countries
  }
  get states(): State[] {
    return this.directionService.states
  }
  get cities(): any {
    return this.directionService.cities
  }

  getStatesFromName(nameCountry: string) {
    if(!nameCountry)return
    this.directionService.getStatesFromCountry(nameCountry)
      .subscribe(console.log)
  }

  getCitiesFromName(nameState: string) {
    if(!nameState)return
    this.directionService.getCitiesFromState(nameState)
      .subscribe()
  }

  getalgo(data:any){
    console.log(data)
  }
  ngOnInit(): void {
  }


}
