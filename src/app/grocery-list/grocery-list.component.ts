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

  totalPrice: number = 0;

  items?: Item[];

  item : Item = {} as Item;

  constructor(private http: HttpClient, private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      (items) => {
        this.items = items 
        console.log(this.items)
      }
    )
  }

  getTotalPrice(): number{
    return this.totalPrice;
  }

  addItemToList(item: Item){
    this.groceryList.push(item);

    this.totalPrice = 0;

    this.groceryList.forEach(element => {     



      this.totalPrice += parseInt(element.geinfo.current.price)

    });
  }


  addNewItem(itemName: string, itemRSID: string){
    
    this.item.id = 0;
    this.item.name = itemName;
    this.item.rsid = parseInt(itemRSID);

    this.itemService.createItem(this.item).subscribe(
      (item) => {
        this.item = item
        console.log(item)
        this.reloadCurrentPage()
      }
    )
  }

  editItem(item: Item){

  }

  deleteItem(item: Item){
    this.itemService.deleteItem(item)
      .subscribe(
        (item) => {
          this.item = item
          console.log(item)
          this.reloadCurrentPage()
        }
      )     
  }

  reloadCurrentPage() {
    setTimeout(() => window.location.reload(), 500);
   }

   

}
