import { Component, OnInit } from '@angular/core';
import { Item } from '../Models/item';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceryList: Item[] = [];

  items?: Item[];

  constructor(private http: HttpClient, private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  addItem(item: Item){
    this.groceryList.push(item);
  }

  addNewItem(itemName: string, itemRSID: string){
    parseInt(itemRSID);
  }

}
