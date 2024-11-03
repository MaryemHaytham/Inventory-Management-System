import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeleteResponse, IProduct, ISignleProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private _HttpClient: HttpClient) {}

  products(): Observable<IProduct> {
    return this._HttpClient.get<IProduct>('api/products');
  }

  getProductById(id: number): Observable<ISignleProduct> {
    return this._HttpClient.get<ISignleProduct>(`api/products/${id}`);
  }

  deleteProductById(id: number): Observable<IDeleteResponse> {
    return this._HttpClient.delete<IDeleteResponse>(`api/products/${id}`)
  }

  addProduct(addForm: FormData): void {

  }

  updateProduct(updateForm: FormData): void {

  }
}
