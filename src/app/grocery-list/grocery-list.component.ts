import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Item } from '../Models/item';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons  } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  @ViewChild('content')
  private modalRef?: TemplateRef<any>;
  public closeResult = '';
  groceryList: Item[] = [];
  totalPrice: number = 0;
  items?: Item[];
  item : Item = {} as Item;
  updateItem : Item = {} as Item;
  user: User = {} as User;

  constructor(private modalService: NgbModal, private itemService: ItemService, private groceriesService: GroceriesService) { }

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

  deleteItemFromList(item: Item){
    const index = this.groceryList.indexOf(item, 0);
    if (index > -1) {
      this.groceryList.splice(index, 1);
    }

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

  updateItems(item: Item) {
    this.updateItem.id = this.item.id
    this.updateItem.name = item.name;
    this.updateItem.rsid = item.rsid;
    this.updateItem.geinfo = this.item.geinfo;
    console.log(this.item);
    console.log(this.updateItem);
    this.itemService.updateItem(this.updateItem)
    .subscribe(
      (item) => {
        this.updateItem = item
        console.log(this.updateItem);
        // this.reloadCurrentPage()
      }
    )
  }

  createGroceries(list: Item[]){
    this.user.id = 1;
    this.user.name = "Ron Liebregts";

    this.groceriesService.createGroceries(this.user, list)
    .subscribe(
      (items) => {
        this.items = items 
        console.log(this.items)
      }
    )
  }

  openModal(content: any, item: Item) {
    this.item = item;
    console.log(item);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'sm'});
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
