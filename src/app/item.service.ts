import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = "https://localhost:44353/"

  private itemUrl = this.baseUrl + "item/all"

  getItems(): Observable<Item[]>
  {
    return this.http.get<Item[]>(this.itemUrl);
  }
}
