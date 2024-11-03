import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private _HttpClient: HttpClient) { }

  allProduct(): Observable<any> {
    return this._HttpClient.get('products')
  }
}
