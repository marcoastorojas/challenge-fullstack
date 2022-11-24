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
  private _products!: ProductResponse


  getProducts(page:number=1): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.base_url}/products?page=${page}`)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            this._products = resp
          }
        })
      )
  }


  get products(): ProductResponse { return { ...this._products } }
}
