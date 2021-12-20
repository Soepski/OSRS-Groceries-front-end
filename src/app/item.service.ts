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
  private createUrl = this.baseUrl + "item/create"
  private deleteUrl: string = this.baseUrl + 'item/delete/'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }


  public getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  public createItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.createUrl, item, this.httpOptions)
  }

  public deleteItem(item: Item): Observable<Item>{
    return this.http.delete<Item>(this.deleteUrl + item.id, this.httpOptions)
  }

}
