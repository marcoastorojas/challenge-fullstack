import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product, ProductResponse } from 'src/app/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  base_url: string = "http://localhost:3000"
  constructor(private http: HttpClient) {
    this.getProducts().subscribe()
  }
  private _products: Product[] = []


  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.base_url)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            this._products = resp.data
          }
        })
      )
  }

  get products() { return [...this._products] }
}
