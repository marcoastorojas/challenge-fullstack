import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country, State, UserDirection } from 'src/app/interfaces/Directions';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-form-direction',
  templateUrl: './form-direction.component.html',
  styleUrls: ['./form-direction.component.scss']
})
export class FormDirectionComponent implements OnInit, OnDestroy {
  @Input('countries') countries: Country[] = [];
  @Output('onFormCompleted') formComplete = new EventEmitter<UserDirection>()
  constructor(
    private directionService: DirectionService, 
    private fb: FormBuilder,
    private router:Router) { }

  formDirection: FormGroup = this.fb.group({
    country: ["", [Validators.required, Validators.minLength(1)]],
    state: ["", [Validators.required, Validators.minLength(1)]],
    city: ["", [Validators.required, Validators.minLength(1)]],
    address1: ["", [Validators.required]],
    address2: ["", [Validators.required]],
  })
  get states(): State[] { return this.directionService.states }
  get cities(): any { return this.directionService.cities }
  getStatesFromName(nameCountry: string) {
    if (!nameCountry) return
    this.directionService.getStatesFromCountry(nameCountry)
      .subscribe(console.log)
  }
  getCitiesFromName(nameState: string) {
    if (!nameState) return
    this.directionService.getCitiesFromState(nameState)
      .subscribe()
  }

  sendForm() {
    if (this.formDirection.invalid) return
    console.log(this.formDirection.value)
    this.formComplete.emit(this.formDirection.value)
  }

  changeCountry!: Subscription
  changeState!: Subscription
  ngOnInit(): void {
    const changeCountry = this.formDirection.get('country')?.valueChanges!
    this.changeCountry = changeCountry.subscribe(value => {
      this.getStatesFromName(value)
    })

    const changeState = this.formDirection.get('state')?.valueChanges!
    this.changeState = changeState.subscribe(value => {
      this.getCitiesFromName(value)
    })
  }
  ngOnDestroy(): void {
    this.changeCountry.unsubscribe()
    this.changeState.unsubscribe()
  }
  navigteToPayment(){
    setTimeout(() => {
      this.router.navigate(["/checkout/payment"])
    }, 200);
  }
}
