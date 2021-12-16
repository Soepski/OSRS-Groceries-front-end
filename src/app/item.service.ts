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


  public getItems(): Observable<Item[]>
  {
    return this.http.get<Item[]>(this.itemUrl);
  }

  public createItem(name: string, rsid: number): Observable<Item>
  {
    let id: number = 0;
    let item: Item = {id, name, rsid};

    console.log(this.createUrl, item);

    

    return this.http.post<Item>(this.createUrl, item);

    
  }

}
