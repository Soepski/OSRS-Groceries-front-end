import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './Models/item';
import { User } from './Models/user';
import { User_items } from './Models/user_items';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = "https://localhost:44353/";
  private getUrl = this.baseUrl + "groceries/get";
  private createUrl = this.baseUrl + "groceries/create";
  useritems!: User_items;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }


  public getGroceries(): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl + this.getUrl);
  }

  public createGroceries(user: User, items: Item[]): Observable<Item[]>{
    this.useritems.user = user;
    this.useritems.items = items;
    return this.http.post<Item[]>(this.createUrl, this.useritems, this.httpOptions)
  }
}
