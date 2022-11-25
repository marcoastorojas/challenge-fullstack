import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, Observable, of, tap } from 'rxjs';
import { Country, State } from 'src/app/interfaces/Directions';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  countries: Country[] = []
  states: State[] = []
  cities = []
  private base_url = "https://www.universal-tutorial.com/api"
  private token: string = ""
  constructor(private http: HttpClient) {
    this.getCountries().subscribe(data => { console.log(data)})
  }

  getCountries(): Observable<Country[]> {
    return this.http.get(`${this.base_url}/getaccesstoken`, {
      headers: {
        "api-token": "JlgEGcCRj12-xcLJvpFSbMa-8lYOA4n0OgWGVWcDxu0xUY52PPdiRstpTG6Tjls8QIM",
        "user-email": "marcoasto@gmail.com"
      }
    }).pipe(
      concatMap((data: any) => {
        this.token = `Bearer ${data.auth_token}`
        const token = `Bearer ${data.auth_token}`
        return this.http.get<Country[]>(`${this.base_url}/countries`, {
          headers: {
            "Authorization": token
          }
        })
      }),
      tap(data => {this.countries = data })
    )
  }

  getStatesFromCountry(country: string): Observable<State[]> {
    return this.http.get<State[]>(`${this.base_url}/states/${country}`, {
      headers: { "Authorization": this.token }
    })
      .pipe(tap(states => {
        console.log(states)
        this.states = states
      }))
  }

  getCitiesFromState(state: string) {
    return this.http.get(`${this.base_url}/cities/${state}`, {
      headers: { "Authorization": this.token }
    })
      .pipe(tap((cities: any) => {
        this.cities = cities
      }))
  }

}
